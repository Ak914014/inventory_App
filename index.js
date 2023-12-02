import express from "express";
import path from "path";
import ejsLayouts from "express-ejs-layouts";
import ProductController from "./src/controlles/product.controller.js";

const server = express();
let productController = new ProductController();

server.use(express.urlencoded({ extended: true }));
server.set("view engine", "ejs");
server.use(ejsLayouts);
server.set("views", path.join(path.resolve(), "src", "views"));

server.get("/", productController.getProducts);
server.get("/new", productController.getAddForm);
server.post("/", productController.addProducts);

server.use(express.static("src/views"));


server.listen(3200, () => {
  console.log("server is listing at 3200");
});
