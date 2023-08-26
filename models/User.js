// require mongoose for const { schema, model }
// Create schema to create model + its properties
// create models -> const 'modelPlaceholder' = model('modelName', schemaPlaceHolder)
// export, include in index.js

const { Schema , Types } = require('mongoose');

// properties: username, email, thoughts[], friends[]
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