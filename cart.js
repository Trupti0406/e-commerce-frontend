// function decrement() {
//   var itemval = document.getElementById("quantity");
//   if (itemval.value <= 0) {
//     itemval = 0;
//     alert("Quantity cannot be negative!");
//   } else {
//     itemval.value = parseInt(itemval.value) - 1;
//   }
// }

// function increment() {
//   var itemval = document.getElementById("quantity");
//   itemval.value = parseInt(itemval.value) + 1;
// }

/* =========================== Cart Functionality============================ */
let carts = document.querySelectorAll(".add-cart");

let products = [
  {
    id: "kids1",
    name: "Jacket",
    price: "599",
    // description: "Black Kids Polyester Blend Winter Wear Jackets with cap.",
    image: "https://m.media-amazon.com/images/I/81TLGPPXpxL._AC_UL320_.jpg",
    inCart: 0,
  },
  {
    id: "kids2",
    name: "Pink Dress",
    price: "849",
    // description: "Doodle Girl's Dress, Frock for Girls, Round Neck.",
    image: "https://m.media-amazon.com/images/I/71B+9RXeyoS._UY741_.jpg",
    inCart: 0,
  },

  {
    id: "kids3",
    name: "Tee",
    price: "303",
    // description: " Fashionably printed, bright color, regular fit, t-shirt.",
    image:
      "https://m.media-amazon.com/images/I/817qiPvaCKL._SY500._SX._UX._SY._UY_.jpg",
    inCart: 0,
  },
  {
    id: "kids4",
    name: "Night Suit",
    price: "799",
    // description: "Kids blue Cotton Printed Pyjama Set Pack of 1",
    image: "https://m.media-amazon.com/images/I/71C4Q55SQAL._AC_UL320_.jpg",
    inCart: 0,
  },
  {
    id: "kids5",
    name: "Dress",
    price: "1499",
    // description: "Curly Tale's girls cotton dress with 1 frock 1 jacket.",
    image: "https://m.media-amazon.com/images/I/818UbIhYbML._UX679_.jpg",
    inCart: 0,
  },
  {
    id: "kids6",
    name: "Jumpsuit",
    price: "799",
    // description: " Midi Type Dungaree with Denim Separate Hosiery T-shirt",
    image: "https://m.media-amazon.com/images/I/81P7ODspaJL._UY741_.jpg",
    inCart: 0,
  },
  {
    id: "kids7",
    name: "dress",
    price: "999",
    // description: "Fashion Dream Girls Calf Length Pleated green Dress",
    image: "https://m.media-amazon.com/images/I/61UIDB6j96L._UY741_.jpg",
    inCart: 0,
  },
  {
    id: "kids8",
    name: "Baby Flannel",
    price: "699",
    // description: "Unisex Baby Flannel Jumpsuit Panda Style Cosplay Clothes.",
    image: "https://m.media-amazon.com/images/I/61kqhTCKtgL._AC_UL320_.jpg",
    inCart: 0,
  },
  {
    id: "kids9",
    name: "Traditionals",
    price: "1349",
    // description: "Creation Boys' Black Cotton Blend Sherwani Style Kurta Set",
    image: "https://m.media-amazon.com/images/I/61Tu7AD5tDL._UY550_.jpg",
    inCart: 0,
  },
  {
    id: "kids10",
    name: "Romper",
    price: "1549",
    // description: " Hopscotch Baby Boys Cotton and Spandex Half Sleeves Applique Bow Solid Romper in Blue Color",
    image: "https://m.media-amazon.com/images/I/61Eyv-MHHGL._UX679_.jpg",
    inCart: 0,
  },
  {
    id: "kids11",
    name: "T-shirts",
    price: "700",
    // description: " woonie Baby Girl's Fit And Flare Frock Set with hat.",
    image: "https://m.media-amazon.com/images/I/31BZCo3lsSL.jpg",
    inCart: 0,
  },
  {
    id: "kids12",
    name: "Frock",
    price: "711",
    // description: "Baby girls frock dress violet color, kneee-length.",
    image: "https://m.media-amazon.com/images/I/7113XqJIZ9L._UX679_.jpg",
    inCart: 0,
  },
];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(products[i]);
  });
}
window.onload = function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
};
