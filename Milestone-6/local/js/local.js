const AddToProduct = () => {
  const productName = document.querySelector("#productName");
  const productQuantity = document.querySelector("#productQuantity");
  const product = productName.value;
  const quantity = productQuantity.value;

  showDisplayData(product, quantity);
  savaProdiuctToLocaStorage(product, quantity);
  productName.value = "";
  productQuantity.value = "";
};

const showDisplayData = (product, quantity) => {
  const displayProduct = document.querySelector("#displayProduct");
  const li = document.createElement("li");
  li.innerHTML = `${product} ${quantity}`;
  displayProduct.appendChild(li);
};

const gerStoragedShoppingCart = () => {
  let cart = {};
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

const savaProdiuctToLocaStorage = (product, quantity) => {
  const cart = gerStoragedShoppingCart();

  cart[product] = quantity;
  const catStingfied = JSON.stringify(cart);
  localStorage.setItem("cart", catStingfied);
  console.log(catStingfied);
};

const displayProductFromLocalSrotage = () => {
  const saveCart = gerStoragedShoppingCart();
  console.log(saveCart);

  for (const product in saveCart) {
    const quantity = saveCart[product];
    console.log(product, quantity);
    showDisplayData(product, quantity);
  }
};
displayProductFromLocalSrotage();
