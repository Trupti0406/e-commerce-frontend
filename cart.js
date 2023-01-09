// let carts = document.querySelectorAll(".add-cart");

// for (let i = 0; i < carts.length; i++) {
//   carts[i].addEventListener("click", (e) => {
//     cartNumbers();
//     e.preventDefault();
//   });
// }

// function onLoadCartNumbers() {
//   let productNumbers = localStorage.getItem("cartNumbers");
//   if (productNumbers) {
//     document.querySelector("span").textContent = productNumbers;
//   }
// }

// function cartNumbers(product, action) {
//   let productNumbers = localStorage.getItem("cartNumbers");
//   productNumbers = parseInt(productNumbers);
//   if (productNumbers) {
//     localStorage.setItem("cartNumbers", productNumbers + 1);
//     document.querySelector("span").textContent = productNumbers + 1;
//   } else {
//     localStorage.setItem("cartNumbers", 1);
//     document.querySelector("span").textContent = 1;
//   }
// }

// onLoadCartNumbers();

function decrement() {
  var itemval = document.getElementById("quantity");
  if (itemval.value <= 0) {
    itemval = 0;
    alert("Quantity cannot be negative!");
  } else {
    itemval.value = parseInt(itemval.value) - 1;
  }
}

function increment() {
  var itemval = document.getElementById("quantity");
  itemval.value = parseInt(itemval.value) + 1;
}
