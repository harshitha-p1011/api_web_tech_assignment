const express = require("express");
const mongoose = require("mongoose");
const product = require("./models/product");
const order = require("./models/order");
const customer = require("./models/customer");
const bodyParse = require("body-parse");
var methodOverride= require("method-override");
const cors = require("cors");
mongoose.connect("");
const app= express();
app.use(methodOverride("_method"));
app.use(bodyParse.urlencoded({extended: false}));
app.use(bodyParse.json());
app.use(express.json());
app.use(cors());
app.set("view", "./views");
app.set("view engine", "ejs");
app.get("/", async(req,res) =>{
    res.send("Hello");
});
app.post("/order", async(req, res) =>{
    try{
        console.log(req.body);
        await order.create(req.body);
        res.send({message: "order created"});
    } catch (error){
        res.send({
            message: error.message,
        });
    }
});
app.post("/product", async(req, res) =>{
    try{
        console.log(req.body);
        await product.create(req.body);
        res.send({message: "order product"});
    } catch (error){
        res.send({
            message: error.message,
        });
    }
});
app.post("/customer", async(req, res) =>{
    try{
        console.log(req.body);
        await customer.create(req.body);
        res.send({message: "customer created"});
    } catch (error){
        res.send({
            message: error.message,
        });
    }
});
app.get("/order", async(req, res) =>{
    try{
        let result= await order.find({customer_id: req.params.order_id});
        res.send({...result});
    } catch (error){
        res.send({
            message: error.message,
        });
    }
});
app.get("/product/:product_id", async(req, res) =>{
    try{
        let result= await product.find({customer_id: req.params.product_id});
        console.log(req.params);
        res.send(result[0]);
    } catch (error){
        res.send({
            message: error.message,
        });
    }
});
app.get("/customer/:customer_id", async(req, res) =>{
    try{
        let result= await customer.find({customer_id: req.params.customer_id});
        res.send(result[0]);
    } catch (error){
        res.send({
            message: error.message,
        });
    }
});
app.get("/product/:protoType", async(req, res) =>{
    try{
        let result= await product.find({customer_id: req.params.productType});
        res.send({...result});
    } catch (error){
        res.send({
            message: error.message,
        });
    }
});