const router = require("express").Router();
const { Home, User, Decor } = require("../../models");

//GET all saved decor and it's associations (api/decor)
router.get("/", async (req, res) => {
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
router.get("/:id", async (req, res) => {
  try {
    const dbDecorData = await Decor.findByPk(req.params.id, {
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
router.post("/", async (req, res) => {
  console.log(req.body);
  console.log(req.session);

  try {
    const dbDecorData = await Decor.create({
      product_name: req.body.product_name,
      description: req.body.description,
      price: req.body.price,
      link: req.body.link,
      user_id: req.session.user_id,
      home_id: req.body.home_id,
    });

    res.status(200).json(dbDecorData);
    // res.status(200).json(dbDesignTagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update route for decor
router.put("/", async (req, res) => {
  console.log(req.body);
  console.log(req.session);

  try {
    const dbDecorData = await Decor.update(
      {
        product_name: req.body.product_name,
        description: req.body.description,
        price: Number(req.body.price),
        link: req.body.link,
        user_id: req.session.user_id,
        home_id: Number(req.body.home_id), 
      },
      {
        where: {
          id: Number(req.body.decor_id), 
        },
      }
    );

    res.status(200).json(dbDecorData);
    // res.status(200).json(dbDesignTagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE route for the views
router.delete("/", async (req, res) => {
  try {
    const dbDecorData = await Decor.destroy({
      where: {
        id: req.body.decor_id,
      },
    });

    res.status(200).json(dbDecorData);

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
