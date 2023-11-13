/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

// Configure Nodemailer with your email service credentials
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: functions.config().emailservice.user,
        clientId: '891972920996-r9jjg81ou5f3bhkh5h69rrhl54q73ln2.apps.googleusercontent.com',
        clientSecret: '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',
        refreshToken: 'VOTRE_REFRESH_TOKEN',
        accessToken: 'VOTRE_ACCESS_TOKEN', // Optionnel, généré automatiquement
    },
});
exports.sendEmailConfirmation = functions.firestore
  .document('users/{userId}')
  .onCreate((snap, context) => {
    const newData = snap.data();
    const email = newData.email; // Assuming the saved data contains an 'email' field

    const mailOptions = {
      from: '3space.contact@gmail.com',
      to: email,
      subject: 'Confirmation Email',
      text: `Hello, your data has been saved successfully!` // Customize your email message
    };

    return transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return null;
      }
      console.log('Email sent:', info.response);
      return null;
    });
  });
