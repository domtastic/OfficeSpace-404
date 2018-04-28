import React, {Component} from 'react';
import './Header.css';
import {Row, Col, Container, Navbar} from 'reactstrap';
import Badge from '../badge/badge';
 class Header extends Component {
    render(){
        return (
           <Container fluid>


            <Navbar className="main-header" style={{backgroundColor:"#efefef",
                                                    height:"88px", 
                                                    width:"100%",
                                                    marginTop:"-25px",
                                                    paddingBottom:"40px", 
                                                    border: "none", 
                                                    marginLeft:"20px",
                                                    backgroundColor:"#ffffff", 
                                                    boxShadow: "10px 0 50px 0 rgba(61, 110, 146, 0.1)",

                                                }}>
    
        <div className="user-wrapper">
        
      
        



               


            
        <ul className="nav navbar-nav">
     
                  
          <div className="navbar-form navbar-left">
            <div className="form-groups">
            <span className="input-group-addon">
             <i className="fas fa-search" id="searchIcon" style={{fontSize:"1.1em", marginTop:"-70px"}}></i>
             </span>
             <input type="text" placeholder="Search..." className="form-controls" id="searchBar" />
             </div>
             </div>
            
             </ul>
              </div>
            <div className="navbar-form navbar-right">
             <ul className="nav navbar-nav navbar-right">
         
     
              <li className="presentation"><img src="http://byrobin.nl/store/wp-content/uploads/sites/4/2016/03/local.png" className="notif" />
                </li>
          <li className="presentation"><img src={require("../img/photo.jpeg")} className="img-circle" alt="User Image" />
               </li>

                    <li className="dropdown"><div className="username">Demo User</div></li>

              
                  
             </ul>

                   

 </div>





            </Navbar>
            </Container>
        
        )
    }
}
export default Header;