const getStoredCart = () => {
  const storeCartString = localStorage.getItem("cart");
  if (storeCartString) {
    return JSON.parse(storeCartString);
  }
  return [];
};

const saveCartToLS = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const addToLS = (id) => {
  const cart = getStoredCart();
  cart.push(id);
  // save cart to localStorage
  saveCartToLS(cart);
};

const removeFromLS = (id) => {
  const cart = getStoredCart();
  const remaining = cart.filter((idx) => idx !== id);
  saveCartToLS(remaining);
};

// <-!----- current cooking
const getStoredCartForCurrentCooking = () => {
  const storeCartString = localStorage.getItem("currentCooking");
  if (storeCartString) {
    return JSON.parse(storeCartString);
  }
  return [];
};

const saveCartToLSForCurrentCooking = (currentCooking) => {
  const cartStringified = JSON.stringify(currentCooking);
  localStorage.setItem("currentCooking", cartStringified);
};

const addToLSForCurrentCooking = (id) => {
  const cart = getStoredCartForCurrentCooking();
  cart.push(id);
  // save cart to localStorage
  saveCartToLSForCurrentCooking(cart);
};

export {
  addToLS,
  getStoredCart,
  removeFromLS,
  getStoredCartForCurrentCooking,
  saveCartToLSForCurrentCooking,
  addToLSForCurrentCooking,
};
