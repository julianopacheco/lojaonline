var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
	name: { type: String, required: true, index: { unique: true }},
	description: String,
	salesValue: Number,
	creator: { type: Schema.Types.ObjectId, ref: "User" },
	created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', ProductSchema);