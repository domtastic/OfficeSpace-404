// import { accessKeyId, secretAccessKey } from './s3-config.json'
// // import {AWS} from 'aws-sdk';
// //  const production = false;

// //  console.log('this is the data: ', process.env.AWS_SDK_LOAD_CONFIG);
 
// //  export const apiUrl = production ? 'http://domain.com/api' : 'http://localhost:3000/api';
// let  emailConfig = module.exports = {
//     service: 'Gmail',
//     auth: {
//         user: 'officespace.fileshare@gmail.com', //gmail account email address
//         pass: 'PasswordOne' // gmail account password
//     }
//  };
// // export const url = 'http://localhost:3001';

// export const s3Config = {
//     accessKeyId: accessKeyId,
//     secretAccessKey: secretAccessKey,
//     region: "us-east-2"
// };
let  emailConfig = module.exports = {
    service: 'Gmail',
    auth: {
        user: 'officespace.fileshare@gmail.com', //gmail account email address
        pass: 'PasswordOne' // gmail account password
    }
 };
// export const s3Bucket = 'geo-firm';
