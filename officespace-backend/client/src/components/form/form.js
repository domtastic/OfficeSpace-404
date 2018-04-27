
import React, { Component } from 'react';
import {s3Bucket} from '../../config'
import {createUser, login} from '../../helpers/user';
import './form.css';
import AWS from 'aws-sdk';
import uuid from 'uuid';
import Header from '../Header/Header';
import {Card, CardBody} from 'reactstrap';

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
			imgUrl: null
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



onClickSubmitForm(event)
{ 
	// Create an S3 client
	var s3 = new AWS.S3();
	// Create a bucket and upload something into it
	var bucketName = this.state.user.username + uuid.v4();
	var keyName = this.state.user.username;

	s3.createBucket({ Bucket: bucketName }, function () {
		var params = { Bucket: bucketName, Key: keyName };
		s3.putObject(params, function (err, data) {
			if (err)
				console.log(err)
			else
				console.log("Successfully uploaded data to " + bucketName + "/");
		});
	});
	const user={
		...this.state.user,
		bucket: event.target.value
	};

	this.setState({user});
	console.log(this.state.user);
	createUser(this.state.user).then((response) => {

	console.log("Hey i got data after send post", response);
	});
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
<Header/>
			 <Card>
			 <CardBody>
			 <div className="user-form shadow">
			
			  <p className="font-form paragraph-header">User Form</p>
				<div className="signin-form-group">
                    <label htmlFor="inputTextUsername">Username</label>
                    <input onKeyUp={this.onKeyUpInputTextUsername} type="text" className="form-control" id="inputTextUsername" placeholder="Username"/>
                </div>
                <div className="signin-form-group">
                    <label htmlFor="inputTextPassword">Password</label>
                    <input onKeyUp={this.onKeyUpInputTextPassword} type="password" className="form-control" id="inputTextPassword" placeholder="Password"/>
                </div> 
                 <div className="signin-form-group">
                    <label htmlFor="inputTextEmail">Email</label>
                    <input onKeyUp={this.onKeyUpInputTextEmail} type="text" className="form-control" id="inputTextEmail" placeholder="Email"/>
                </div>
                 {/* <div className="signin-form-group">
                    <label htmlFor="inputTextBucket">Bucket</label>
                    <input onKeyUp={this.onKeyUpInputTextBucket} type="text" className="form-control" id="inputTextBucket" placeholder="Bucket"/>
                </div> */}
				 <div className="signin-form-group">
                    <label htmlFor="inputTextImgUrl">Image URL</label>
                    <input onKeyUp={this.onKeyUpInputTextImgUrl} type="text" className="form-control" id="inputTextImgUrl" placeholder="URL"/>
                </div>
  				<div className="signin-form-group">
                    <label htmlFor="inputSelectRegion">Region</label>
                    <select onChange={this.onChangeInputSelectRegion} className="form-control" 
                    id="inputSelectRegion" >
                    	<option value="option">Select Region</option>
  						<option value="option">US-East-1 (Ohio)</option>
 						<option value="option">US-East-2 (N. Virginia)</option>
 						<option value="option">US-West-1 (Oregon)</option>
 						<option value="option">US-West-2 (N. California)</option>
 						<option value="option">EU-West-1 (Ireland)</option>
 						<option value="option">EU-West-2 (London)</option>
 						<option value="option">EU-West-3 (Paris)</option>
					</select>
				</div>		 
		    <button onClick={this.onClickSubmitForm}  className="btn btn-info w-10">Submit</button>

        </div>
        </CardBody>
           </Card>
	 </div>	

	
	);
  }
}

export default UserForm;

