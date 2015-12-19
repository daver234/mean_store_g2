var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CustomerSchema = new mongoose.Schema({
 name: { type: String, required: true, unique: true },
 created_at: { type: Date, default: Date.now },
 date_display: String,
 orders: [{type: Schema.Types.ObjectId, ref: 'Order'}]
});
mongoose.model('Customer', CustomerSchema); 
//CustomerSchema.plugin(uniqueValidator);
