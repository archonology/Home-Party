const router = require('express').Router();
const { Home, User, Decor } = require('../../models');
//package for sending email alerts to subscribers
const nodemailer = require("nodemailer");
const { subscribe } = require('../home-routes');

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


// GET all saved homes (api/homes)
router.get('/', async (req, res) => {
    try {
        const dbHomeData = await Home.findAll({
            include: [{ model: User }, { model: Decor }],
        });

        res.status(200).json(dbHomeData);
    } catch (err) {
        res.status(500).json(err);
    }
});



router.post('/', async (req, res) => {
    // for testing route
    console.log(req.body);
    console.log(req.session);

    try {
        const dbHomeData = await Home.create({

            title: req.body.title,
            address: req.body.address,
            price: req.body.price,
            bedrooms: req.body.bedrooms,
            bathrooms: req.body.bathrooms,
            square_feet: req.body.square_feet,
            link: req.body.link,
            user_id: req.session.user_id,

        });
        res.status(200).json(dbHomeData);

        //access the subsriber data to see if an email needs to be sent
        const dbSubscriberData = await User.findByPk(req.session.user_id,{
            include: [{ model: Subscriber }]
        });
        const subscribers = dbSubscriberData.map((subscriber) => subscriber.get({ plain: true }));

        if (Subscriber) {
            // send mail with defined transport object
            let info = await transporter.sendMail({
                from: '"Fred Foo 👻" <foo@example.com>', // sender address
                to: `"bar@example.com, ${subscribers}"`, // list of receivers -- use a template literal?
                subject: "Home Party Post!", // Subject line
                text: "Someone you follow on Home Party Just added a new home!", // plain text body
                html: `"<b> ${req.session.user_name}, who you follow on Home Party Just added a new home! <a href='https://pacific-lake-30103.herokuapp.com/'>Click here to see!</a></b>"`, // html body
            });

        }

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/', async (req, res) => {
    console.log(req.body);
    try {
        const dbHomeData = await Home.update({

            title: req.body.title,
            address: req.body.address,
            price: Number(req.body.price),
            bedrooms: Number(req.body.bedrooms),
            bathrooms: Number(req.body.bathrooms),
            square_feet: Number(req.body.square_feet),
            link: req.body.link,
            user_id: req.session.user_id,

        },
            {
                where: {
                    user_id: req.session.user_id,


                },
            }
        );


        res.status(200).json(dbHomeData);

    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;
