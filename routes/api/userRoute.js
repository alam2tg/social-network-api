const router = require('express').Router();
const { getAllUsers, getSingleUser, createUser, deleteUser, addFriend, deleteFriend } = require('../../controllers/userController');

// route /api/user
router.get('/', getAllUsers);
router.get('/:userId', getSingleUser);
router.post('/',createUser);
router.delete('/userId', deleteUser);


// add / delete friend routes
router.post('/:userId/friends/:friendId', addFriend);
router.delete('/:userId/friends/:friendId', deleteFriend);


module.exports = router;