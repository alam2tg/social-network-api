// require mongoose for const { schema, model }
// Create schema to create model + its properties
// create models -> const 'modelPlaceholder' = model('modelName', schemaPlaceHolder)
// export, include in index.js

const { Schema , Types } = require('mongoose');

// properties: username, email, thoughts[], friends[]
const userSchema = new Schema (
	{
		username: {

		},
		email: {

		},
		thoughts: [{
			
		}],
		friends: [{
			
		}]
	}
)