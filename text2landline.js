const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const app = express();

app.use(bodyParser());

var listenPort = process.env.PORT || 3010;

app.post('/', (req, res) => {
    console.log("\n\n**************************************************************************");
    console.log("req:");
    console.log(req);
    console.log("\n\n**************************************************************************");
    console.log("req.body:");
    console.log(req.body);
    console.log("\n\n**************************************************************************");

    /*
    var splittext = req.body.url.split('callerid=');
    var callerid = splittext[1];
    var messagebody = req.body.TranscriptionText;

    console.log("Request received:");
    console.log("callerid: " + callerid);
    console.log("messagebody: " + messagebody);

    // send an SMS
    client.messages.create({
            body: messagebody,
            to: callerid,  // Text this number
            from: process.env.TWILIO_NUMBER // From a valid Twilio number
        },
        function (error, message) {
            if (error) {
                // print error to console
                console.log(error);
            } else {
                // print message sid to console
                console.log("message sent: " + message.sid);
            }
        }
    )
    */
});


app.get('/', (req, res) => {
    console.log("entering default GET path");
});


// set listen port for webhook
http.createServer(app).listen(listenPort, () => {
    console.log('Express server listening on port ' + listenPort);
});
