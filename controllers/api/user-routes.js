const router = require('axios').default;
//needs model connections in the curly fries
const { Home, User, Decor } = require('../../models');

//GET all user info (api/users)
// router.get('/', async (req, res) => {
//     try {
//         const dbUserData = await User.findAll({
//             include: [{ model: User }, { model: Home }],
//         });
  
//         res.status(200).json(dbUserData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
//   });

async function getUsers() {
    try {
        const dbUserData = await User.findAll({
            include: [{ model: Home }, { model: Decor }],
        });
        const response = await axios.get('/users');
        res.status(200).json(dbUserData);
    } catch (error) {
        res.status(500).json(err);
    }
}

getUsers();


module.exports = router;