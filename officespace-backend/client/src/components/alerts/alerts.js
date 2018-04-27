import React, { Component } from 'react';
import { Alert } from 'reactstrap';

class Alerts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss} style={{marginLeft:"640px", width:"50%"}}>
        I am an alert and I can be dismissed!
      </Alert>
    );
  }
}

export default Alerts;