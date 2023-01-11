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

// Adding data to local storage
const addToCartBtn = document.getElementsByClassName("add-cart");
for (let i = 0; i < addToCartBtn.length; i++) {
  addToCartBtn[i].addEventListener("Click", function () {
    console.log(i);
  });
}
