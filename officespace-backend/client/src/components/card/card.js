import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';


import { Container, Row, Col } from 'reactstrap';
import PeopleCard from '../PeopleCard/PeopleCard';

class CompanyCards extends Component{
  constructor (){
    super();
    this.state ={
      people: [
      {
       image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/US-NationalParkService-Logo.svg/2000px-US-NationalParkService-Logo.svg.png",
        name: "National Park Service",
        description: "The National Park Service preserves unimpaired the natural and cultural resources and values of the National Park System for the enjoyment, education, and inspiration of this and future generations.",
      },
      {
        image:"https://www.interiorsplash.com/hs-fs/hubfs/initech.png?t=1479303225000&width=559&name=initech.png",
         name: "iniTECH",
        description: "At iniTECH we are dedicated to help customers by developing, implementing, and supporting custom process automation and information integration solutions.",
      },
      {
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Chevron_Logo.svg/1200px-Chevron_Logo.svg.png",
       name: "Chevron",
        description: "Our success is driven by our people and their commitment to getting results the right way – by operating responsibly, executing with excellence, applying innovative technologies and capturing new opportunities for profitable growth.",
      }
      ]
    }
  }
  render(){
let peopleCards = this.state.people.map(person =>{
  return(
   
    <PeopleCard person={person} />
    
    )
})
  return (
  <Container fluid>
  <CardDeck style={{marginLeft:"-10px", marginTop:"50px"}}>
    {peopleCards}
    </CardDeck>
    </Container>
    )
}
}


    export default CompanyCards;


