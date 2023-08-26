// require mongoose for const { schema, model }
// Create schema to create model + its properties
// create models -> const 'modelPlaceholder' = model('modelName', schemaPlaceHolder)
// export, include in index.js

// properties: thoughtText, createdAt, username, reactions[]

const { Schema, model } = require("mongoose");

// 1. create reaction schema with nested documents
// 2. thought schema

const reactionSchema = new Schema({
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

const thoughtSchema = new Schema(
	{
		thoughtText: {
			type: String,
			required: true,
			minLength: 1,
			maxLength: 280
		},
		createdAt: {
			type: Date,
			default: Date.now
		},
		username: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		reactions: [{reactionSchema}],
	},
	{
		toJSON: {
			virtuals: true,
		},
		id: false,
	}
);

thoughtSchema
	.virtual('reactionCount')
	.get(function() {
		return this.reactions.length;
	})

const Thought = model('thought', thoughtSchema)

module.exports = Thought;