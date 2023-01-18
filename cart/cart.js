function decrement(incdec) {
  var itemval = document.getElementById(incdec);
  if (itemval.value <= 0) {
    itemval = 0;
    alert("Quantity cannot be negative!");
  } else {
    itemval.value = parseInt(itemval.value) - 1;
  }
}

function increment(incdec) {
  var itemval = document.getElementById(incdec);
  itemval.value = parseInt(itemval.value) + 1;
}

/* =========================== Cart Functionality============================ */
let carts = document.querySelectorAll(".add-cart");

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", (e) => {
    e.preventDefault();
  });
}
window.onload = function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
};
