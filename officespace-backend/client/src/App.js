import React, { Component } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle} from 'reactstrap';
import {AWS} from 'aws-sdk'
import axios from 'axios';

import logo from "./logo.svg";
import "./App.css";
import Login from './pages/Home/login-page';
import Footer from './components/footer/footer';
import SideBar from './components/sidebar/side-bar';
import UserForm from './components/form/form';
import { Container, Row, Col } from 'reactstrap';
import ManageClients from './pages/ManageClients/manage-clients';
import SentFiles from './pages/SentFiles/SentFiles';
import NotFound from './components/not-found/not-found';

import ClientDash from "./pages/Client/ClientDash";
import AdminDash from './pages/Admin/AdminDash';
import Header from './components/Header/Header';
import Basic from './components/dnd/dnd';

class App extends Component {
	constructor(props)
	{
		super(props);
	
  this.state = {
    user: {
      id: null,
      name: '',
      username: '',
      email: '',
      bucket: '',
      profilePic: null,
      loggedIn: false,
      isAdmin: false
    }
    
  };
  this.userDidLogin = this.userDidLogin.bind(this);
  this.checkLogin = this.checkLogin.bind(this);
}
  componentDidMount() {
    this.checkLogin();
    console.log(this.state);
  }

  checkLogin = (cb) => {
    axios.get("/api/session").then((res) => {
      console.log(this.state, "this is checkLogin state")
      console.log('this is the response from CheckLogin ',res)
      this.setState({ user: res.data });
      console.log('this is the user login from checkLogin', this.state)
      if (cb) {
        cb()
      }
    })
  }

  userDidLogin = (user, cb) => {
    console.log(this.state)
    axios.post("/api/login", user).then((res) => {
      console.log('this is the user info', user)
      this.checkLogin(cb).then(() =>{
      if (this.state.redirect && this.props.user.isAdmin) {
        return <Redirect to={`/admin/${this.props.user.username}`} />;
      }
      else if (this.state.redirect && !this.props.user.isAdmin){
          return <Redirect to={`/client/${this.props.user.username}`} />;
      }
    })
    });
    
  }

  userLogOut = (cb) => {
    axios.get("/api/logout").then((res) => {
      console.log(res)
      this.setState({ user: res.data });
      <Redirect to="/" />
    })
  }


  render() {
    return (
   
        <div className="App">
            {/* {
              this.state.user.loggedIn ? <SideBar userInfo={this.state.user} logout={this.userLogOut}/>
                  : null
            } */}
        <Router>
          <div>
            <Switch>
               <Route path='/' exact render={(props) => (
                <Login user={this.state.user} {...props} handleLogin={this.userDidLogin} />
              )}/>
                <Route path='/admin/:username' render={(props)=> {
                  console.log('User Logged in: ', this.state.user.loggedIn, "| User is Admin: ", this.state.user.isAdmin);
                  return this.state.user.isAdmin ? (
                      <AdminDash {...props}/>
                  ) : (
                      <Redirect to='/'/>
                  )
                }} />
                <Route path='/client/:username' render={(props)=> {
                    console.log('User Logged in: ', this.state.user.loggedIn, "| User is Admin: ", this.state.user.isAdmin);
                    return !this.state.user.isAdmin ? (
                        <ClientDash user={this.state.user} {...props}/>
                    ) : (
                        <Redirect to='/'/>
                    )
                }} />

              <Route path='/dashboard' component={AdminDash} exact  {...this.props}/>
              {/* <Route path='/inbox' component={} exact /> */}
              <Route path='/clients' component={ManageClients} exact />
              <Route path='/files/sent' component={SentFiles} exact />
              <Route path='/signup' exact component={UserForm} {...this.props}/>
              <Route path='/files/new-file' component={Basic}/>
              <Route component={NotFound}/>
      
              
            </Switch>

          </div>
        </Router>
       
        </div>
    );
  }
}

export default App;