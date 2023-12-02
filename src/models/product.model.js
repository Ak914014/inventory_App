  export default class ProductModel {
    constructor(id, name, desc, price, imageUrl) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.desc = desc;
      this.imageUrl = imageUrl;
    }
    static get() {
      // this get method retuns the array of the products
      return products;
    }
    static add(productObj) {
      let newProduct = new ProductModel(
        products.length + 1,
        productObj.name,
        productObj.price,
        productObj.desc,
        productObj.imageUrl
      );
      products.push(newProduct); // this will push new product in array
    }
  }
  var products = [
    new ProductModel(
      1,
      "iphone 15 ",
      "Apple iPhone 15 (128GB, Blue) 48 MP + 12 MP Dual Rear & 12 MP Front Camera",
      74000,
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697018314/Croma%20Assets/Communication/Mobiles/Images/300684_0_qoabmw.png?tr=w-640"
    ),
    new ProductModel(
      2,
      "iphone 13",
      "Apple iPhone (128GB, pink)  48 MP + 12 MP Dual Rear & 12 MP Front Camera",
      64000,
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664009482/Croma%20Assets/Communication/Mobiles/Images/243461_0_tzq0y4.png?tr=w-640"
    ),
    new ProductModel(
      3,
      "Smartwatch",
      "42.92mm TFT LCD Display, IP68 Waterproof, Black Strap",
      1299,
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1675185851/Croma%20Assets/Communication/Wearable%20Devices/Images/256314_0_user2g.png?tr=w-640"
    ),
    new ProductModel(
      3,
      "Smartwatch ",
      "46.5mm HD Display, IP68 Sweat Resistant, Active Black Strap",
      1299,
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1695899546/Croma%20Assets/Wearable/Wearable%20Devices/Images/301657_mkg4r3.png?tr=w-640"
    ),
  ];
