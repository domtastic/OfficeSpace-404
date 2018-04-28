import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import {Card, Row, CardHeader, Button} from 'reactstrap';
import './dnd.css';
import SideBar from '../sidebar/side-bar';
import Header from '../Header/Header';

class Basic extends Component {
  constructor() {
    super()
    this.state = { files: [] }
  }

  onDrop(files) {
    this.setState({
      files
    });
  }

  render() {
    return (
  <div className="top">  
        <SideBar/>
        {/* <Header/> */}
        <div style={{padding: "50px"}}>
            <Card id="dndCard" >

                <CardHeader style={{backgroundColor:"#12a79d"}}>
                      <h2 style={{marginTop:"20px", color:"#ffffff"}}>Upload</h2>
                </CardHeader>
                      <ul>
                        {
                          this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                        }
                      </ul>
                <div className="dropzone">
                    <Dropzone onDrop={this.onDrop.bind(this)}  style={{height:"40%", width:"75%", borderStyle:"dashed", borderColor:"#4363A8 ", marginTop:"70px", marginLeft:"12.5%"}}>
                    <img src={require("../img/clouds.png")} id="image" />
                    <p style={{fontSize:"30px", margin:"auto", textAlign:"center"}}>Drag & Drop Files to Upload</p>
                    </Dropzone>
                    <Button id="dndButton">Upload</Button>

                </div>




            </Card>
        </div>
   </div>   
       


    );
  }
}
export default Basic;