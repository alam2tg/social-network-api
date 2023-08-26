//require thought model
const Thought = require('../models/Thought')

//module.exports async getThoughts, singleThought, create, update, addReaction, deleteReaction
module.exports = {
	async getAllThoughts(req,res) {
		try {
			const allThoughts = await Thought.find();
			res.json(allThoughts);
		} catch {
			console.log(err);
			res.status(500).json(err);
		}
	},

	async getsingleThoughts(req,res) {

	},

	async createThought(req,res) {

	},

	async updateThought(req,res) {

	},

	async addReaction(req,res) {

	},

	async deleteReaction(req,res) {

	},
}