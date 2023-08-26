// require mongoose for const { schema, model }
// Create schema to create model + its properties
// create models -> const 'modelPlaceholder' = model('modelName', schemaPlaceHolder)
// export, include in index.js

// properties: thoughtText, createdAt, username, reactions[]

const { Schema, model } = require("mongoose");

// 1. create reaction schema with nested documents
// 2. thought schema

const reactionSchema = newSchema({
	reactionId: {
		type: Schema.Types.ObjectId,
		default: Schema.Types.ObjectId,
	},
	reactionBody: {
		type: String,
		required: true,
		maxLength: 280,
	},
	username: {
		type: Schema.Types.ObjectId,
		ref: "user",
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const thoughtSchema = new Schema({
	thoughtText: {
		type: String,
		required: true,
	},
	createdAt: {},
	username: {},
	reactions: [{}],
});
