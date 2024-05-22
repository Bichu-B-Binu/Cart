import asyncHandler from "../middleWare/asyncHandler.js";
import Product from "../model/productModel.js";


const getProducts=asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.status(200).json(products);
    //   res.json(products);
  })

  const getProductById=asyncHandler(async (req, res) => {
    console.log(req);
    // const product = products.find((p) => p._id === req.params.id);
    const product = await Product.findById(req.params.id);
    if (product) {
      return res.json(product);
    }

    res.status(404);
    throw new Error("Resource Not Found");
  })

  export {getProducts,getProductById}