const mongoose= require("mongoose");
const orderSchema = new mongoose.Schema({
    customer_id: {type: String, require:true},
    inventory_id: {type: String, require:true},
    item_name: {type: String, require:true},
    quantity: {type: Number, require:true}
});
const order= mongoose.model("order", orderSchema);
module.exports= order;