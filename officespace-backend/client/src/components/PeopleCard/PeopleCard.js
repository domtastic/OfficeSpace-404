import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardDeck} from 'reactstrap';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';



class PeopleCard extends Component {
  
  constructor(props) {
    super(props);
  }
  render () {
    let { image, name, company, description } = this.props.person;
    return (

      <div>
   
    <Row>
        <Card style={{backgroundColor:"#F5F7FA", width:"60vw",height:"40vh", marginTop:"-10px", border:"1px solid #e3e3e3", borderRadius:"4px", marginBottom:"30px",  marginLeft:"50px",boxShadow:"5px 10px 18px #888888"}}>
                    <CardTitle style={{padding: "15px 30px 0px", fontWeight:"600", fontSize:"22px"}}>{this.props.person.name}</CardTitle>

          <CardImg top  src={this.props.person.image} style={{ width:"85px", height:"100px", paddingBottom:"15px", paddingTop:"10px", marginLeft:"30px"}} alt="Card image cap" />
          <CardBody style={{backgroundColor:"white", padding:"10px 30px 20px 30px"}}>
            <CardSubtitle>{this.props.person.company}</CardSubtitle>
            <CardText >{this.props.person.description}</CardText>
            <Button style={{backgroundColor:"#71AC95", marginTop:"-20px", float:"right", width:"100px"}}>Delete</Button>
          </CardBody>
        </Card>
</Row>


    
 
      </div>


    )
  }
}

export default PeopleCard;


