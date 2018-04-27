import React, {Component} from 'react';

import './side-bar.css';
import {Col, Row, Container} from 'reactstrap';


export default class SideBar extends Component {

  constructor(props) {
    super(props);



  this.state={showDropdownMenu: false,


};

this.showDropdownMenu = this.showDropdownMenu.bind(this);
this.closeDropdownMenu = this.closeDropdownMenu.bind(this);
}

showDropdownMenu(event){
  event.preventDefault();

  this.setState({ showDropdownMenu: true}, () => {
    document.addEventListener('click', this.closeDropdownMenu);
   
  
});
}


closeDropdownMenu(event){
  if(!this.dropdownMenu.contains(event.target)){
    this.setState({showDropdownMenu: false}, () => {

    document.addEventListener('click', this.closeDropdownMenu);
  });
}
}

  //   this.toggle = this.toggle.bind(this);
  //   this.state = {
  //     isOpen: false
  //   };
  // }
  // toggle() {
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   });
  // }

  render() {
    
    return (
// <div className="content" >
      // <div className="main-panel">

 

    <nav className="sidebar">
    <div className="brand" >
    <h1>GeoFirm</h1>
</div>
<div className="sidebar-wrapper">

<div className="user-wrapper">

    <div className="user-panel">
  
    <div className="user">
                           
                        </div>
                        
                       
                        </div>
        <div className="nav-side-menu">
       
   

   


        <ul className="list-unstyled components">


            <li className="active"><a href="/dashboard"> <i className="fas fa-tachometer-alt fa-lg" id="icons"></i>Dashboard</a></li>


            
            <li><a href="/clients"><i className="fas fa-users fa-lg" style={{marginTop:"0px", marginLeft:"-10px"}}id="icons"></i> Manage Clients</a></li>

            <li>


  <a onClick={this.showDropdownMenu} className="dropdown-toggle" style={{marginTop:"-5px"}}href="#" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <i className="fas fa-file fa-lg" id="icons"></i>Manage Files
  </a>
{
  this.state.showDropdownMenu
  ? (

  <div className="dropdownMenu dropdown-menu-right" ref={(element) => {
    this.dropdownMenu = element;
  }}
  >
    <a className="dropdown-item" href="/files/received">Received</a>
       
    <a className="dropdown-item" href="/files/sent">Sent</a>
    <a className="dropdown-item" href="/files/new-file">Send File</a>


    
</div>
)
: (
null
)
}
  </li>
 <li><a href="/"><i className="fas fa-power-off fa-lg" id="icons"></i>Sign Out</a></li>
           
          
     </ul>
     </div>
   </div>
   </div>

 </nav>




   


     
     
    )
  }

  
};

