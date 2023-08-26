const router = require('express').Router();
const { getAllUsers, getSingleUser, createUser, deleteUser } = require('../../controllers/userController');

// route /api/user
router.route('/').get().post();


// create route /api/user/:userId
//get
//create
//delete


module.exports = router;