// require mongoose for const { schema, model }
// Create schema to create model + its properties
// create models -> const 'modelPlaceholder' = model('modelName', schemaPlaceHolder)
// export, include in index.js

// properties: thoughtText, createdAt, username, reactions[]

const { Schema , model } = require('mongoose');

// 1. create reaction schema with nested documents
// 2. thought schema

const reactionSchema = newSchema (

)

const thoughtSchema = new Schema (
	{
		thoughtText: {
			type: String,
			required: true,
		},
		createdAt: {

		},
		username: {

		},
		reactions: [{}]
	}	
)