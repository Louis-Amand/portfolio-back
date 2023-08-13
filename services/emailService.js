const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//     host: 'smtp.zoho.com',
//     port: 465,
//     secure: true,  // true for 465, false for other ports
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS
//     }
// });

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

function sendEmail(message, callback) {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "louisamandd@gmail.com",
        subject: "[Portfolio] Formulaire de contact",
        text: message,
    };
    console.log("mailOptions", mailOptions);

    transporter.sendMail(mailOptions, callback);
}

module.exports = {
    sendEmail
};
