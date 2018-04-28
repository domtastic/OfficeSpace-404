const nodemailer = require('nodemailer');
const gmailConfig = require('../config');
//

module.exports = {
    //SEND SIGN UP EMAIL
    signUp: function (req, res) {
        console.log("hit email signup");
        let clientEmail = req.body.clientEmail;
        let clientPassword = req.body.clientPassword;
        let clientUsername = req.body.clientUsername;
        let output =
            `<h2> Hello from the OfficeSpace team! You have received login credentials for the OfficeSpace file sharing application.<h2/>
            <ul>
                <li>Username: ${clientUsername}</li>
                 <li>Password: ${clientPassword}</li>
            </ul>

            <h3>Follow the link to login to your account: ADD OFFICESPACE APPLICATION WEBSITE</h3>`;


console.log(gmailConfig);
        let transporter = nodemailer.createTransport(gmailConfig);

        let mailOptions = {
            from: "OfficeSpace 404 File Share", // sender address
            to: clientEmail, // list of receivers
            subject: 'OfficeSpace 404 Login Info', // Subject line
            // text: , // plain text body
            html: output// html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (err, data) => {
            console.log(err);
            if (err) {
                res.json({
                    msg: 'fail'
                })
            } else {
                res.json({
                    msg: 'success'
                })
            }
        })
    }
}