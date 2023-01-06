const mongoose= require("mongoose");
const productSchema = new mongoose.Schema({
    product_id: {type: String, unique:true, require:true},
    product_type: {type: String, require:true},
    product_name: {type: String, require:true},
    product_price: {type: Number, require:true},
    available_quantity: {type: Number, require:true}
});
const product= mongoose.model("product", productSchema);
module.exports= product;