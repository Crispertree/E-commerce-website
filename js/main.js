function displayCart() {

let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let container = document.getElementById("cart-items");
  if (!container) return;

  container.innerHTML = "";

  if (cart.length === 0) {
  container.innerHTML = "<p>Your cart is empty.</p>";
  return;
}

  cart.forEach((item, index) => {

    container.innerHTML += `
      <div>
        <h3>${item.name}</h3>
        <p>${item.price} kr</p>

        <button onclick="removeItem(${index})">
          Remove
        </button>
      </div>
    `;
  });

}

displayCart();

function removeItem(index) {

  let cart = JSON.parse(localStorage.getItem("cart"));

  cart.splice(index, 1);

  localStorage.setItem("cart", JSON.stringify(cart));

  displayCart();
}

function updateCartCount() {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
document.getElementById("cart-count").innerText = cart.length;

}
function addToCart(id, name, price) {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({
    id: id,
    name: name,
    price: price
  });

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Added to cart!");
}

