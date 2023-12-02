import ProductModel from "../models/product.model.js";

export default class ProductController {
  getProducts(req, res) {
    let products = ProductModel.get();
    res.render("products", { products: products });

    //    return res.sendFile(path.join(path.resolve(),'src','views','index.html'))
  }
  getAddForm(req, res) {
    return res.render("new-products");
  }

  addProducts(req, res) {
    ProductModel.add(req.body);
    let products = ProductModel.get();
    return res.render("products", { products });
  }
}
