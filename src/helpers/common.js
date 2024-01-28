import nodemailer from 'nodemailer'
export const createOtp = () => {
    return Math.floor(1000 + Math.random() * 9000);
}


export const sendEmail =  (from, to, subject, text) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'alok@samyotech.com',
            pass: 'cuns kaqs nbmx xvvv'
        }
    });

    const htmlContent = `
    <html>
    <head>
        <style>
            /* Add CSS styles for your email */
            body {
                font-family: Arial, sans-serif;
                background-color: #f5f5f5;
                padding: 20px;
            }
            .container {
                background-color: #ffffff;
                border-radius: 10px;
                padding: 20px;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            }
            h3 {
                color: #333333;
            }
            p {
                color: #666666;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h3>Welcome to Fule Management Syetem</h3>
            <p>Your One Time Password : <b> ${text} </b> </p>
            <p><a href="https://example.com">Click here</a> to visit our website.</p>
        </div>
    </body>
    </html>
`;


    const mailOptions = {
        from: from,
        to: to,
        subject: subject,
        html: htmlContent
    };

   transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.error('Error sending email:', error);
            return false

        } else {
            console.log('Email sent:', info.response);
            return true
        }
    });


}