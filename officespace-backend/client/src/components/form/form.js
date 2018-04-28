
import React, { Component } from 'react';
import {s3Bucket} from '../../config'
import './form.css';
import AWS from 'aws-sdk';
import uuid from 'uuid';
import Header from '../Header/Header';
import {Card, CardBody} from 'reactstrap';
import axios from 'axios';
class UserForm extends Component
{

	constructor(props)
	{
        super(props);
        
		this.state={user: {
			username: null,
			email: null,
			password: null,
			region: null,
			bucket: null,
			imgUrl: null,
				isAdmin: false
		}

	};

this.onKeyUpInputTextUsername = this.onKeyUpInputTextUsername.bind(this);
this.onKeyUpInputTextPassword = this.onKeyUpInputTextPassword.bind(this);
this.onKeyUpInputTextAccount = this.onKeyUpInputTextAccount.bind(this);
this.onKeyUpInputTextEmail = this.onKeyUpInputTextEmail.bind(this);
this.onKeyUpInputTextImgUrl = this.onKeyUpInputTextImgUrl.bind(this);
this.onChangeInputSelectRegion = this.onChangeInputSelectRegion.bind(this);



this.onClickSubmitForm = this.onClickSubmitForm.bind(this);

	}

onKeyUpInputTextUsername(event)
{

const user= {
	...this.state.user,

username:event.target.value
};

this.setState({user});

}

onKeyUpInputTextPassword(event)
{

const user={

	...this.state.user,

	password:event.target.value
};

this.setState({user});

}

onKeyUpInputTextAccount(event)
{

const user={

	...this.state.user,

	account:event.target.value
};

this.setState({user});

}
onChangeInputSelectRegion(event)
{

const user={

	...this.state.user,

	region:event.target.value
};

this.setState({user});

}
onKeyUpInputTextEmail(event)
{

const user={

	...this.state.user,

	email:event.target.value
};

this.setState({user});

}
// onKeyUpInputTextBucket(event)
// {

// const user={

// 	...this.state.user,

// 	bucket:event.target.value
// };

// this.setState({user});

// }
onKeyUpInputTextImgUrl(event)
{

const user={

	...this.state.user,

	imgUrl:event.target.value
};

this.setState({user});

}

    userDidSignup = (userData, cb) => {
        console.log(userData)
        axios.post("/api/signUp", userData).then((res) => {
            console.log(res);
            alert('client signed up');
        })
    }
    sendClientSignUpEmail = () =>{

        let clientEmail = this.state.user.email;
        let clientPassword = this.state.user.password;
        let clientUsername = this.state.user.username;

        let clientData = {
            clientEmail,
            clientPassword,
            clientUsername
        };
        console.log("Client SignUp Data: ", clientData);

        axios.post("/api/emailSignUp", clientData).then((response)=>{
            console.log(response);
            if (response.data.msg === 'success'){
                alert("Message Sent! What would you do without this alert?");
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

onClickSubmitForm(event)
{ 
	// Create an S3 client
	// var s3 = new AWS.S3();
	// // Create a bucket and upload something into it
	// var bucketName = "geo-firm";
	// var keyName = this.state.user.username;
	// var params = { Bucket: bucketName, Key: keyName };
	// s3.putObject(params, function (err, data) {
	// 		if (err)
	// 			console.log(err)
	// 		else
	// 			console.log("Successfully uploaded data to " + bucketName + "/");
	// 	});
	// });
	const user={
		...this.state.user,
		bucket: event.target.value,
	};

	this.setState({user});
	console.log(this.state.user);

	 this.userDidSignup(this.state.user);
    this.sendClientSignUpEmail();
}

	render()
	{
		return(

            <div className="main-panel" style={{



                width: "calc(100%-280px)",
                height:"95vh",
                overflow: "auto",
                backgroundColor:"#fafcfe",
                minHeight: "100%",
                boxShadow: "0 30px 130px 0 rgba(90, 105, 116, 0.1)"
            }}>
                <Card>
                    <CardBody>
                        <div className="user-form">

                            <p className="font-form paragraph-header">User Form</p>
                            <div className="signin-form-group">
                                <label htmlFor="inputTextUsername">Username</label>
                                <input onKeyUp={this.onKeyUpInputTextUsername} type="text" className="form-control form-input-position" id="inputTextUsername" placeholder="Username"/>
                            </div>
                            <div className="signin-form-group">
                                <label htmlFor="inputTextPassword">Password</label>
                                <input onKeyUp={this.onKeyUpInputTextPassword} type="password" className="form-control form-input-position" id="inputTextPassword" placeholder="Password" style={{marginTop: "0px"}}/>
                            </div>
                            <div className="signin-form-group">
                                <label htmlFor="inputTextEmail">Email</label>
                                <input onKeyUp={this.onKeyUpInputTextEmail} type="text" className="form-control form-input-position" id="inputTextEmail" placeholder="Email"/>
                            </div>
                            {/* <div className="signin-form-group">
                    <label htmlFor="inputTextBucket">Bucket</label>
                    <input onKeyUp={this.onKeyUpInputTextBucket} type="text" className="form-control" id="inputTextBucket" placeholder="Bucket"/>
                </div> */}
                            <div className="signin-form-group">
                                <label htmlFor="inputTextImgUrl">Image URL</label>
                                <input onKeyUp={this.onKeyUpInputTextImgUrl} type="text" className="form-control form-input-position" id="inputTextImgUrl" placeholder="URL"/>
                            </div>
                            <div className="signin-form-group">
                                <label htmlFor="inputSelectRegion">Region</label>
                                <select onChange={this.onChangeInputSelectRegion} className="form-control form-input-position"
                                        id="inputSelectRegion" >
                                    <option value="option">Select Region</option>
                                    <option value="us-east-1">US-East-1 (Ohio)</option>
                                    <option value="us-east-2">US-East-2 (N. Virginia)</option>
                                    <option value="us-west-1">US-West-1 (N. California)</option>
                                    <option value="us-west-2">US-West-2 (Oregon)</option>
                                    <option value="eu-west-1">EU-West-1 (Ireland)</option>
                                    <option value="eu-west2">EU-West-2 (London)</option>
                                    <option value="eu-west-3">EU-West-3 (Paris)</option>
                                </select>
                            </div>
                            <button onClick={this.onClickSubmitForm}  className="btn btn-info w-10 form-submit-button">Submit</button>

                        </div>
                    </CardBody>
                </Card>
            </div>

	
	);
  }
}

export default UserForm;

