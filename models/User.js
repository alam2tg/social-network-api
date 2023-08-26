// require mongoose for const { schema, model }
// Create schema to create model + its properties
// create models -> const 'modelPlaceholder' = model('modelName', schemaPlaceHolder)
// export, include in index.js

const { Schema , model } = require('mongoose');

// properties: username, email, thoughts[], friends[], ref for properties
const userSchema = new Schema (
	{
		username: {
			type: { $trim: {String} },
			unique: true,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true
		},
		thoughts: [{
			type: Schema.Types.ObjectId, ref: "thought"
		}],
		friends: [{
			type: Schema.Types.ObjectId, ref: "user"
		}]
	},
	{
		toJSON: { virtuals: true }, 
		id: false
	},
);

const User = model('user', userSchema)

module.exports = User

//create db on mongoDB