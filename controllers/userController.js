//create crud functions to interact with database
const { User } = require("../models")

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
			const singleUser = await User.findById({ _id: req.params.userId });
			if (!singleUser) {
				return res.status(404).json({ message: 'No user with that ID' })
			}
			res.json(singleUser);
		} catch (err) {
			console.log(err)
			res.status(500).json(err);
		}
	},

	//create a user
	async createUser(req,res) {
		try {
			const userData = await User.create(req.body);
			res.json(userData);
	  } catch (err) {
			console.log(err);
			res.status(500).json(err);
	  }
	},

	//update a user
	async updateUser(req, res) {
		try{
			const userData = await User.updateOne(
				{ _id: req.params.userId }, 
				req.body,
				{ new: true }
				)
			res.json(userData);
		} catch {
			console.log(err);
			res.status(500).json(err)
		}
	},

	//delete a user -> delete thoughts
	async deleteUser(req,res) {
		try {
			const userData = await User.findOneAndDelete({ _id: req.params.userId })
			res.json(userData);
	  } catch (err) {
			console.log(err);
			res.status(500).json(err);
	  }
	},
	//add friend, findByIdAndUpdate...
	async addFriend(req,res) {
		try {
			const newFriend = await User.findByIdAndUpdate(
				req.params.userId,
				{$addToSet:{friends:req.params.friendId}}, 
				{new: true}
				);
			res.json(newFriend);
		} catch(err) {
			console.log(err);
			res.status(500).json(err);
		}
	},
	//delete friend, findbyidandupdate
	async deleteFriend(req,res) {
		try {
			const userData = await User.findByIdAndUpdate(
				req.params.userId,
				{$pull:{friends:req.params.friendId}}, 
				{new: true}
				);
			res.json(userData);
		} catch (err){
			console.log(err)
			res.status(500).json(err);
		}
	}
};