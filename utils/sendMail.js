const router = require("express").Router();
const { Subscriber } = require("../models");
//package for sending email alerts to subscribers
const nodemailer = require("nodemailer");

const sendMail = router.use((req, res, next) => {
  res.on("finish", async () => {
    // You might have to add a logic here like if(req.user) then perform following things
    // Do whatever you want to do here after every API call finishes
    // you can access res.statusCode, req.method etc.

    console.log("Am I even getting to this function at all?");
    console.log(req.session);

    const dbSubscriberData = await Subscriber.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    const subscribers = dbSubscriberData.map((subscriber) =>
      subscriber.get({ plain: true })
    );
    console.log(dbSubscriberData);

    //access the subsriber data to see if an email needs to be sent
    if (subscribers) {
      for (let i = 0; i < subscribers.length; i++) {
      //create nodemailer transporter for email
      // Only needed if you don't have a real mail account for testing (the account mail is sent from, hence the needing the user and password)
      let testAccount = await nodemailer.createTestAccount();

      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: testAccount.user, // generated ethereal user
          pass: testAccount.pass, // generated ethereal password
        },
      });
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: `"${subscribers[i].email}"`, // list of receivers -- use a template literal?
        subject: "Home Party Post!", // Subject line
        text: "Someone you follow on Home Party Just added a new home!", // plain text body
        html: `"<b> ${req.session.user_name} Just added a new home! <a href='https://pacific-lake-30103.herokuapp.com/'>Click here to see!</a></b>"`, // html body
      });
      
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }
    } else {
      res.redirect("/dashboard");
    }
  });
  next();
});

module.exports = sendMail;
