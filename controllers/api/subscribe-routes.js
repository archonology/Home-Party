const router = require('express').Router();
const { Subscriber, User } = require('../../models');

module.exports = router;

// GET all subscriber info (api/subscribers)
router.get('/', async (req, res) => {
    try {
        const dbSubscriberData = await Subscriber.findAll({
            include: [{ model: User }]
        });
  
        res.status(200).json(dbSubscriberData);
    } catch (err) {
        res.status(500).json(err);
    }
  });

router.post('/', async (req, res) => {
    // for testing route
    console.log(req.body);
    console.log(req.session);

    try {
        const subscriberData = await Subscriber.create({

            subscriber: req.body.subscriber,
            email: req.body.email,
            user_id: Number(req.body.user_id),

        });
        res.status(200).json(subscriberData);
        console.log(subscriberData);

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;