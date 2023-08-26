const router = require('express').Router();
const {getAllThoughts, getsingleThoughts, createThought, updateThought, deleteThought, addReaction, deleteReaction } = require('../../controllers/thoughtController.js')

// create route for thought by id
// create route to get all thoughts from user

router
	.route()
	.get()
	.put()
	.delete();

module.exports = router;