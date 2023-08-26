// require mongoose for const { schema, model }
// Create schema to create model + its properties
// create models -> const 'modelPlaceholder' = model('modelName', schemaPlaceHolder)
// export, include in index.js

// Index.js, const 'model' = require(./'model'), export

const Thought = require('./Thought');
const User = require('./User');

module.exports = { Thought , User }