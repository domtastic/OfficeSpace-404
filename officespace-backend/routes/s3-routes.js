// const User = require('../models/s3');
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

module.exports = (file) => {
    // FILE MANIPULATION
    file.get('/s3/files/:bucket', (req, res) => {
        // GET ALL FILES FROM BUCKET
        // req.body = {
        //     Bucket: "examplebucket"
        // };
        s3.listObjects({bucket: req.params.bucket}, (err, data)=>{
            if(err){
                res.status(500).json(err);
            }

            else{
                res.status(201).json(data);
            }
        });
    });
    file.get('/s3/file/:key', (req, res) => {
        // GET ONE FILE
        // req.body = {
        //     Bucket: "examplebucket",
        //     Key: "objectkey.jpg"
        // };
        s3.getObject(req.body, (err, data)=>{
            if(err){
                res.status(500).json(err);
            }

            else{
                res.status(201).json(data);
            }
        })
    });
    file.post('/s3/file', (req, res) => {
        // UPLOAD ONE FILE
        // req.body = {
        //         Body: <Binary String>,
        //         Bucket: "examplebucket",
        //         Key: "exampleobject",
        //         Metadata: {
        //             "metadata1": "value1",
        //             "metadata2": "value2"
        //     }
        // };
        s3.putObject(req.body, (err, data)=>{
            if(err){
                res.status(500).json(err);
            }

            else{
                res.status(201).json(data);
            }
        });
    });

    file.delete('/s3/file', (req, res) => {
        // DELETE ONE FILE
        // req.body = {
        //   Bucket: "examplebucket",
        //   Key: "objectkey.jpg"
        //  };
        s3.deleteObject(req.body, (err, data) =>{
            if(err){
                res.status(500).json(err);
            }

            else{
                res.status(201).json(data);
            }
        });
    });

    // BUCKET MANIPULATION
    file.post('/s3/bucket', (req, res) => {
        // CREATE BUCKET
        // req.body = {
        //     Bucket: "examplebucket",
        //     ACL: public-read-write,
        //     CreateBucketConfiguration: {
        //         LocationConstraint: "eu-west-1"
        //     }
        s3.createBucket(req.body, (err, data) =>{
            if(err){
                res.status(500).json(err);
            }

            else{
                res.status(201).json(data);
            }
        });
    });
    file.delete('/s3/bucket', (req, res) => {
        // delete bucket
        // req.body = {
        //     Bucket: "examplebucket",
        // };
        s3.deleteBucket(req.body, (err, data) =>{
            if(err){
                res.status(500).json(err);
            }

            else{
                res.status(201).json(data);
            }
        });
    });
};