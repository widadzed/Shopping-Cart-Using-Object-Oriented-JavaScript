// Product class
class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  
  // ShoppingCartItem class 
  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
  
    // calculate the total price of the item
    getTotalPrice() {
      return this.product.price * this.quantity;
    }
  }
  
  // ShoppingCart class contains an array of ShoppingCartItem 
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    //add items to the cart
    addItem(product, quantity) {
      const existingItem = this.items.find(item => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.items.push(new ShoppingCartItem(product, quantity));
      }
    }
  
    //remove items from the cart
    removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
    }
  
    //get the total number of items in the cart
    getTotalItems() {
      return this.items.reduce((total, item) => total + item.quantity, 0);
    }
  
    //display cart items
    displayCart() {
      this.items.forEach(item => {
        console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}, Total Price: $${item.getTotalPrice().toFixed(2)}`);
      });
    }
  }
  
  // Tests
  
  const product1 = new Product(1, 'Laptop', 999);
  const product2 = new Product(2, 'Smartphone', 499);
  const product3 = new Product(3, 'Headphones', 199);
  
  const cart = new ShoppingCart();
 
  cart.addItem(product1, 1);
  cart.addItem(product2, 2);
  cart.addItem(product3, 3);

  console.log('Cart contents:');
  cart.displayCart();
  
  console.log(`Total items in cart: ${cart.getTotalItems()}`);
 
  cart.removeItem(2); 
  
  console.log('Updated cart contents:');
  cart.displayCart();
  