//require thought model
const Thought = require("../models/Thought");

//module.exports async getThoughts, singleThought, create, update, addReaction, deleteReaction
module.exports = {
	async getAllThoughts(req, res) {
		try {
			const allThoughts = await Thought.find();
			res.json(allThoughts);
		} catch {
			console.log(err);
			res.status(500).json(err);
		}
	},

	async getSingleThought(req, res) {
		try {
			const thought = await Thought.findById({ _id: req.params.thoughtId });
			if (!thought) {
				return res.status(404).json({ message: "No thought with that ID" });
			}
			res.json(thought);
		} catch (err) {
			res.status(500).json(err);
		}
	},

	async createThought(req, res) {
		try {
			const thoughtData = await Thought.create(req.body);
			res.json(thoughtData);
		} catch (err) {
			res.status(500).json(err);
		}
	},

	async updateThought(req, res) {
		try {
			const thoughtData = await Thought.updateOne(
				{ _id: req.params.thoughtId },
				req.body,
				{ new: true }
			);
			res.json(thoughtData);
		} catch (err) {
			res.status(500).json(err);
		}
	},
	async deleteThought(req, res) {
		try {
			const thoughtData = await Thought.findOneAndDelete({
				_id: req.params.thoughtId,
			});
			res.json(thoughtData);
		} catch (err) {
			res.status(500).json(err);
		}
	},
	async addReaction(req, res) {
		try {
			console.log("thoughtId", req.params.thoughtId);
			console.log("Reaction Body:", req.body);
			const thoughtData = await Thought.findByIdAndUpdate(
				req.params.thoughtId,
				{ $addToSet: { reactions: req.body } },
				{ new: true }
			);
			res.json(thoughtData);
		} catch (err) {
			res.status(500).json(err);
		}
	},

	async deleteReaction(req, res) {
		try {
			const thoughtData = await Thought.findByIdAndUpdate(
				req.params.thoughtId,
				{$pull:{reactions:{_id: req.params.reactionId}}}, 
				{new: true}
				);
			res.json(thoughtData);
		} catch (err){
			 res.status(500).json(err);
		}
	},
};
