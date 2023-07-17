import express from 'express'
import { Product } from '../models/product';

const productsRouter = express.Router();

productsRouter.get(`/`, async(req, res) => {
    const productList = await Product.find();

    if(!productList) {
        res.status(500).json({
            success: false
        })
    }

    res.send(productList);
});
productsRouter.post(`/`, (req, res) => {
    const product = new Product({
        name: req.body.name,
        image: req.body.image
    })

    product.save().then((createdProduct => {
        res.status(201).json(createdProduct);
    })).catch((err)=>{
        res.status(500).json({
            error: err,
            success: false
        })
    })
});

export default productsRouter;