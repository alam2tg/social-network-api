const router = require('express').Router();
const {getAllThoughts, getSingleThought, createThought, updateThought, deleteThought, addReaction, deleteReaction } = require('../../controllers/thoughtController.js')

// create route for thought by id
// create route to get all thoughts from user, add crud methods
router.get('/', getAllThoughts);
router.get('/:thoughtId', getSingleThought);
router.post('/', createThought);
router.put('/:thoughtId', updateThought);
router.delete('/:thoughtId', deleteThought);

//add reactions to thoughtId
router.post('/:thoughtId/reactions/', addReaction);
router.delete('/:thoughtId/reactions/:reactionId', deleteReaction);

module.exports = router;