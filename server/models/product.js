var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new mongoose.Schema({
 product_name: { type: String, required: true, unique: true },
 image_url: String,
 product_desc: String,
 created_at: { type: Date, default: Date.now },
 date_display: String,
 product_qty: Number
});
mongoose.model('Product', ProductSchema); 
