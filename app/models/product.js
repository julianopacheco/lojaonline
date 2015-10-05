var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({


	name: { type: String, required: true, index: { unique: true },
	description: String,
	value: { type: Types.Money, format: 'R$ 0.000,00' },
	creator: { type: Schema.Types.ObjectId, re: "User"},
	created: { type: Date, defauly: Date.now}
});