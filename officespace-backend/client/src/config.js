import { accessKeyId, secretAccessKey } from './s3-config.json'
// import {AWS} from 'aws-sdk';
//  const production = false;

//  console.log('this is the data: ', process.env.AWS_SDK_LOAD_CONFIG);
 
//  export const apiUrl = production ? 'http://domain.com/api' : 'http://localhost:3000/api';
// export const smtp = {
//     host: 'smtp.sendgrid.net',
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//         user: 'apikey', // generated ethereal user
//         pass: 'SendGridApiKey'  // generated ethereal password
//     }
// };

// export const url = 'http://localhost:3001';

export const s3Config = {
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
    region: "us-west-2"
};

export const s3Bucket = 'OfficeSpace';