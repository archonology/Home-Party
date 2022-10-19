const router = require('express').Router();
const { Subscriber } = require("../../models");

module.exports = router;

router.post('/', async (req, res) => {
    // for testing route
    console.log(req.body);
    console.log(req.session);

    try {
        const subscriberData = await subscriber.create({

            email: req.body.email,
            username: req.body.username,

            user_id: req.body.user_id,

        });
        res.status(200).json(subscriberData);

    } catch (err) {
        res.status(500).json(err);
    }
});
