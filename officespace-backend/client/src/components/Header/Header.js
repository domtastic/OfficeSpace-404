import React, {Component} from 'react';
import './Header.css';
import {Row, Col, Container, Navbar} from 'reactstrap';
import Badge from '../badge/badge';
 class Header extends Component {
    render(){
        return (
           <Container fluid>


            <Navbar className="main-header" style={{backgroundColor:"#efefef",
                                                    height:"80px", 
                                                    width:"100%",
                                                    marginTop:"-25px",
                                                    paddingBottom:"40px", 
                                                    border: "none", 
                                                    marginLeft:"-10px",
                                                    backgroundColor:"#ffffff", 
                                                    boxShadow: "10px 0 50px 0 rgba(61, 110, 146, 0.1)",

                                                }}>
        <ul className="nav navbar-nav">
                    <li>    <img src={require("../img/photo.jpeg")} className="img-circle" alt="User Image" /></li>
                    <li>    <img src="http://byrobin.nl/store/wp-content/uploads/sites/4/2016/03/local.png" className="notif" />
</li>
                    <li>  <div className="username">Demo User</div></li>

  <li><div className="title">Admin</div></li>
                    </ul>

   <div className="user-wrapper">



                  <div className="user">

    

 <div className="user-panel">


                <div className="userinfo">

 


  </div>
</div>


</div>

   </div>
            </Navbar>
            </Container>
        
        )
    }
}
export default Header;