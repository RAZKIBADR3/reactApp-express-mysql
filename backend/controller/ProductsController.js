// import product model
const productModel = require('../model/product')

const index = async (req, res)=> {
    const products = await productModel.getAll();
    res.json(products[0]);
}

const destroy = async (req, res)=> {
    await productModel.destroy(req.params.id);
}

module.exports = { index , destroy };