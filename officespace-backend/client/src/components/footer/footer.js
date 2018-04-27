import React, { Component } from "react";
import {Row, Col, Container} from 'reactstrap';
import './footer.css';
class Footer extends Component {
  render() {
    return (
     
<Container fluid>
<footer className="page-footer">

    <p className="footer-copyright" style={{ lineHeight:"1"}}>
        OfficeSpace © 2018 Copyright
    </p>

</footer>
</Container>

                      
    );
  }
}

export default Footer;