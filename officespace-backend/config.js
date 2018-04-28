import {accessKeyId,secretAccessKey} from './s3-config.json'
let  emailConfig = module.exports = {
    service: 'Gmail',
    auth: {
        user: 'officespace.fileshare@gmail.com', //gmail account email address
        pass: 'PasswordOne' // gmail account password
    }
 };


export const url = 'http://localhost:3000';

export const s3Config = {
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
    region: 'us-east-2'
 
};
