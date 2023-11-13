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

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();
const firestore = admin.firestore();

exports.sendThankYouEmail = functions.firestore
  .document("users/{userId}")
  .onCreate(async (snapshot, context) => {
     try {
    const data = snapshot.data();
    const userEmail = data.email;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "3space.contact@gmail.com",
        pass: "ishiwcinengmfhjc",
    },
});

// Define the email content
const mailOptions = {
  from: "3space.contact@gmail.com",
  to: userEmail,
  subject: "Thank You for Joining!",
  text: "Thank you for adding your email to our database. We appreciate your support!",
};

await transporter.sendMail(mailOptions);

      return null;
    } catch (error) {
      console.error("Error sending email:", error);
      return null;
    }
  });