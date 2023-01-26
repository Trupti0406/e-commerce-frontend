// Item quantity increase / decrease functionality
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

// Deleting an Item
var removeCartItemButton = document.getElementsByClassName("delete");

for (var i = 0; i < removeCartItemButton.length; i++) {
  var button = removeCartItemButton[i];
  button.addEventListener("click", function (event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.parentElement.remove();
    updateCartTotal();
  });
}

// Changing total when quantity changes
var quantityInputs = document.getElementsByClassName("w-25");
for (var i = 0; i < quantityInputs.length; i++) {
  var input = quantityInputs[i];
  input.addEventListener("change", function (event) {
    updateCartTotal();
  });
}

function updateCartTotal() {
  var cartRows = document.getElementsByClassName("items-row");
  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("cart-price")[0];
    var quantityElement = cartRow.getElementsByClassName("w-25")[0];
    var price = parseInt(priceElement.innerText.replace("₹", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
  document.getElementsByClassName("cost-amt")[0].innerText = "₹" + total;

  document.getElementsByClassName("total-amt")[0].innerText =
    "₹" + (total);
}
