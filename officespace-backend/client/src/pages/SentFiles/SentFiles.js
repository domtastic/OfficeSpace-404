import React from 'react';
import SideBar from '../../components/sidebar/side-bar';
import Header from '../../components/Header/Header';
import Footer from '../../components/footer/footer';
import {Col, Row, Container, Card, CardBody, CardTitle} from 'reactstrap';
import IniTECH from '../../components/client-table/client-table';
import ChevronTable from '../../components/chevron-table/chevron-table'



const SentFiles = () => (
    <div className="main-panel" style={{

  width: "calc(100%-280px)",
  height:"95vh",
  overflow: "auto",
  backgroundColor:"#fafcfe",
  minHeight: "100%",
  boxShadow: "0 30px 130px 0 rgba(90, 105, 116, 0.1)"
}}>

<SideBar/>
 

  <div className="content" style={{padding:"10px", marginLeft:"300px"}}>

 <Col md="12">
<IniTECH/>
<ChevronTable/>

</Col>
</div>
<Footer/>
</div>

);

export default SentFiles;