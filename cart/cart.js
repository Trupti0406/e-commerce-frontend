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
