import React from 'react';
import SideBar from '../../components/sidebar/side-bar';
import Header from '../../components/Header/Header';
import Footer from '../../components/footer/footer';
import ClientTable from '../../components/client-table/client-table';
import ChevronTable from '../../components/chevron-table/chevron-table'
import {Col, Row, Container, Card, CardBody, CardTitle} from 'reactstrap';


const ClientDashboard = () => (
    <div className="main-panel" style={{

  position: "relative",
  width: "calc(100%-280px)",
  height:"95vh",

  backgroundColor:"#fafcfe",
  minHeight: "100%",
overflow: "auto",

  boxShadow: "0 30px 130px 0 rgba(90, 105, 116, 0.1)"
}}>
  {/* <Header/> */}

<SideBar/>
 
 <div className="content" style={{padding:"10px", marginLeft:"300px"}}>

<Col md="12">

<ClientTable/>

</Col>
</div>
<Footer/>
</div>  


);

export default ClientDashboard;