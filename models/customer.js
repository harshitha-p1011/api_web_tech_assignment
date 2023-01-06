const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
    customer_id: {type: String, unique:true, require:true},
    customer_name: {type: String, require:true},
    email: {type: String, unique:true, require:true},
    balance: {type: Number, require:true}
});
const customer= mongoose.model("customer", customerSchema);
module.exports= customer;