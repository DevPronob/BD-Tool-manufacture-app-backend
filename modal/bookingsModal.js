const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  paid: { type: Boolean },
  transactionId: { type: String }
});

const BookingsTool = mongoose.model('BookingsTool', productSchema);

module.exports = BookingsTool;
