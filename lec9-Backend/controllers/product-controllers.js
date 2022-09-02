const { json } = require('express');
const productFilter = require('../models/product-filter.model');
const productSchema = require('../schemas/product.schema');
const mongoose = require('mongoose');


exports.getProductAction = async (req, res, next) => {
    const productId = req.params.id;
    const product = await productSchema.findById(productId);
    return res.json(product);
}

exports.getAllProductAction = async (req, res, next) => {
    const products = await productSchema.find({});
    return res.json(products);
}

exports.findProductAction = async (req, res, next) => {
    const products = await productSchema.find({title: req.body.title, price: req.body.price});
    return res.json(products);
}

exports.postProductAction = async (req, res, next) => {
    const product = new productSchema(req.body);
    //product._id = new mongoose.Types.ObjectId();
    const addedProduct = await product.save()
    return res.status(201).json(addedProduct);
}

exports.putProductAction = async (req, res, next) => {
    const product = await productSchema.findById(req.body.id);
    
    product.title = req.body.title;
    product.price = req.body.price;
    product.description = req.body.description;
    product.imageUrl = req.body.imageUrl;

    const updatedProduct = await product.save()
    return res.json(updatedProduct);
}

exports.deleteProductAction = async (req, res, next) => {
    const productId = req.params.id;
    const deletedProduct = await productSchema.findByIdAndDelete(productId);
    return res.json(deletedProduct);
}