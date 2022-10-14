const router = require('express').Router();
const { Home, User, Decor } = require('../../models');

//GET all saved decor and it's associations (api/decor)
router.get('/', async (req, res) => {
    try {
        const dbDecorData = await Decor.findAll({
            include: [{ model: User }, { model: Home }],
        });

        res.status(200).json(dbDecorData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET a single decor
router.get('/posts/:id', async (req, res) => {
    try {
        const dbDecorData = await Blog.findByPk(req.params.id, {
            include: [{ model: User }, { model: Home }],
        });
        //for testing routes
        res.status(200).json(dbDecorData);
        
        //   const decors = dbDecorData.map((blog) => blog.get({ plain: true }));
        // res.render('decor', { decors, loggedIn: req.session.loggedIn,});
    } catch (err) {
        res.status(500).json(err);
    }
});

//post route for decor
router.post('/', async (req, res) => {
    try {
        const dbDecorData = await Decor.create(req.body, {
            include: [{ model: User }, { model: Comment }],
            product_name: req.body.product_name,
            description: req.body.description,
            price: req.body.price,
            link: req.body.link,
            home_id: req.session.home_id, //need to attach through session?,
            user_id: req.session.user_id,//need to attach through session?
        });

        //for testing routes
        res.status(200).json(dbDecorData);
        // const decors = dbBlogData.map((decor) => decor.get({ plain: true }));
        // res.render('dashboard', { decors, loggedIn: req.session.loggedIn, });
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE route for the views
router.delete('/:id', async (req, res) => {
    try {
        const dbDecorData = await Blog.destroy(req.body, {
            include: [{ model: User }, { model: Comment }],
            title: req.body.title,
            post: req.body.post,
            user_id: req.session.user_id,
            where: {
                id: req.params.id,
            },
        });

        //for testing routes
        res.status(200).json(dbDecorData);

        // const decors = dbDecorData.map((decor) => decor.get({ plain: true }));
        // res.render('dashboard', { decors, loggedIn: req.session.loggedIn, });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;