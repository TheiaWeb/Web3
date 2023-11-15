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
    subject: "Welcome to Our Community!",
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');
  
          /* Your CSS styles here */
          body {
            background-color: #f0f4f8;
            color: #333;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            font-family: 'Inter', sans-serif;
          }
          .container {
            max-width: 600px;
            margin: 40px auto;
            padding: 20px 30px;
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          h1 {
            color: #9600FA;
            font-weight: 600;
            font-family: 'Montserrat', sans-serif;
          }
          /* Rest of your CSS styles here */
  
        </style>
      </head>
      <body>
      
        <div class="container">
          <h1>Welcome to Our Community!</h1>
          <p>Hi there,</p>
          <p>We're ecstatic to welcome you to our innovative Web3 start-up! Your subscription to our newsletter has opened the door to a <b>new era of code-free website creation</b>. Get ready to explore the limitless possibilities of the Web 3.0 ecosystem with us.</p>
          <p>You'll receive cutting-edge insights, <b>early access to new features</b>, and exclusive content directly in your inbox.</p>
          <p>Connect with our community:</p>
          <div class="social-icons">
            <a href="https://twitter.com/ThirdSpace_3" target="_blank" class="button"> <img src="https://thirdweb-5b016.web.app/img/twitter-logo.png" alt="Twitter"></a>
            <a href="https://discord.gg/WBCqRV9PVr" target="_blank" class="button"><img src="https://thirdweb-5b016.web.app/img/discord-logo.png" alt="Discord"></a>
          </div>
          <div class="signature">
            <p>Cheers,<br><strong>Third Space Team</strong></p>
            <p><span><a href="" class="link">www.3spacex.com</a></span> - <span><a href="" class="link">Privacy Policy</a></span></p>
            <img src="https://thirdweb-5b016.web.app/img/logo-colors_mail.png" alt="Company Logo">
          </div>
        </div>
      </body>
      </html>
    `,
  };
  
await transporter.sendMail(mailOptions);

      return null;
    } catch (error) {
      console.error("Error sending email:", error);
      return null;
    }
  });