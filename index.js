const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));


const googlePass = process.env.REACT_APP_GMAIL_PASS



const contactEmail = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "mariafcc01@gmail.com",
        pass: googlePass,
    },
});

contactEmail.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
});



router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const mail = {
        from: "mariafcc01@gmail.com",
        to: "mariafcc01@icloud.com",
        subject: "Contact Form Message",
        html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: "failed" });
        } else {
            res.json({ status: "sent" });
        }
    });
});


router.post("/covid", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const mail = {
        from: "mariafcc01@gmail.com",
        to: "mariafcc01@icloud.com",
        subject: "Waver",
        html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Phone: ${phone}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: "failed" });
        } else {
            res.json({ status: "sent" });
        }
    });
});