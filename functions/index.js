const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

const firestore = admin.firestore();

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: gmailEmail,
        pass: gmailPassword
    }
});

exports.sendWelcomeEmail = functions.firestore
    .document('users/{userId}')
    .onCreate(async(snap, context) => {
        const userData = snap.data();
        const userEmail = userData.email;

        const mailOptions = {
            from: gmailEmail,
            to: userEmail,
            subject: 'Welcome to our Newsletter',
            text: 'Thank you for subscribing to our newsletter. We appreciate your interest!'
            
            };
          // Admin email options
          const adminMailOptions = {
            from: gmailEmail,
            to: gmailEmail, // Admin's email
            subject: 'Welcome to our Newsletter',
            text: 'Thank you for subscribing to our newsletter. We appreciate your interest!'
          };
            try {
              await mailTransport.sendMail(mailOptions);
              await mailTransport.sendMail(adminMailOptions);
              console.log('Email sent successfully.');
            } catch (error) {
              console.error('Error sending email:', error);
            }
            event.preventDefault(); // Prevent the default form submission

            return null; 
          });