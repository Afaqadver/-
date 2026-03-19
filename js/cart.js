// line 1
let cart = [];

// line 3
function addToCart(product) {
  cart.push(product);
  updateCartUI();
}

// line 8
function removeFromCart(id) {
  cart = cart.filter(p => p.id !== id);
}
