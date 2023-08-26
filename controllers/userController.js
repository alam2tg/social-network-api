//create crud functions to interact with database
const { ObjectId } = require('mongoose').Types;
const { User } = require("../models/")

//First, create aggregate function to count users
// const userCount = async() => {
// 	const numberOfUsers = await User.aggregate()
// 	.count('userCount');
// 	return numberOfUsers;
// }

//create get get all, get one, create, delete routes.
module.exports = {
	//get all users
	async getAllUsers(req, res) {
		try {
			 const users = await User.find();
			 
			 //const userObj = { users, userCount: await userCount() } - test later w/ data

			 res.json(users);
		} catch (err) {
			console.log(err)
			res.status(500).json(err)
		}
  },
	// get a single user
	async getSingleUser(req, res) {
		try {
			const users = await User.findById({ _id: req.params.userId });
			if (!user) {
				return res.status(404).json({ })
			}
			
			res.json(users);
		} catch (err) {
			console.log(err)
			res.status(500).json(err);
		}

	},



	//create a user
	async createUser(req,res) {

	},



	//delete a user -> delete thoughts
	async deleteUser(req,res) {

	}

}

