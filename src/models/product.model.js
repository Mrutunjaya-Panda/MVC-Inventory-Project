export default class ProductModel {
  constructor(_id, _name, _desc, _price, _imageUrl) {
    this.id = _id;
    this.name = _name;
    this.desc = _desc;
    this.price = _price;
    this.imageUrl = _imageUrl;
  }
  static get() {
    return products;
  }

  static update(productObj){
    const index = products.findIndex((p) => p.id == productObj.id);
    if(index !== -1){
      products[index] = productObj;
    }
  }
  //delete method
  static delete(id){
    const index = products.findIndex((p) => Number(p.id) === Number(id));
    if(index !== -1){
      products.splice(index,1);
    }
  }

  //add a static method to add new product
  //change the add method for uploaded file
  static add(name,desc,price,imageUrl) {
    let newProduct = new ProductModel(
      Date.now(),
      name,
      desc,
      price,
      imageUrl
    );
    products.push(newProduct);
  }

  static getById(id){
    return products.find((p) => Number(p.id) === Number(id));
  }
}

var products = [
  new ProductModel(
    1,
    "Product 1",
    "Description for Product 1",
    19.99,
    "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"
  ),
  new ProductModel(
    2,
    "Product 2",
    "Description for Product 2",
    29.99,
    "https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg"
  ),
  new ProductModel(
    3,
    "Product 3",
    "Description for Product 3",
    39.99,
    "https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg"
  ),
];
