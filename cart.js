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
let shopItemsData = [
  {
    id: "kids1",
    name: "Jacket",
    price: "599",
    description: "Black Kids Polyester Blend Winter Wear Jackets with cap.",
    image: "https://m.media-amazon.com/images/I/81TLGPPXpxL._AC_UL320_.jpg",
  },
  {
    id: "kids2",
    name: "Pink Dress",
    price: "849",
    description: "Doodle Girl's Dress, Frock for Girls, Round Neck.",
    image: "https://m.media-amazon.com/images/I/71B+9RXeyoS._UY741_.jpg",
  },

  {
    id: "kids3",
    name: "Tee",
    price: "303",
    description: " Fashionably printed, bright color, regular fit, t-shirt.",
    image:
      "https://m.media-amazon.com/images/I/817qiPvaCKL._SY500._SX._UX._SY._UY_.jpg",
  },
  {
    id: "kids4",
    name: "Night Suit",
    price: "799",
    description: "Kids blue Cotton Printed Pyjama Set Pack of 1",
    image: "https://m.media-amazon.com/images/I/71C4Q55SQAL._AC_UL320_.jpg",
  },
  {
    id: "kids5",
    name: "Dress",
    price: "1499",
    description: "Curly Tale's girls cotton dress with 1 frock 1 jacket.",
    image: "https://m.media-amazon.com/images/I/818UbIhYbML._UX679_.jpg",
  },
  {
    id: "kids6",
    name: "Jumpsuit",
    price: "799",
    description: " Midi Type Dungaree with Denim Separate Hosiery T-shirt",
    image: "https://m.media-amazon.com/images/I/81P7ODspaJL._UY741_.jpg",
  },
  {
    id: "kids7",
    name: "dress",
    price: "999",
    description: "Fashion Dream Girls Calf Length Pleated green Dress",
    image: "https://m.media-amazon.com/images/I/61UIDB6j96L._UY741_.jpg",
  },
  {
    id: "kids8",
    name: "Baby Flannel",
    price: "699",
    description: "Unisex Baby Flannel Jumpsuit Panda Style Cosplay Clothes.",
    image: "https://m.media-amazon.com/images/I/61kqhTCKtgL._AC_UL320_.jpg",
  },
  {
    id: "kids9",
    name: "Traditionals",
    price: "1349",
    description: "Creation Boys' Black Cotton Blend Sherwani Style Kurta Set",
    image: "https://m.media-amazon.com/images/I/61Tu7AD5tDL._UY550_.jpg",
  },
  {
    id: "kids10",
    name: "Romper",
    price: "1549",
    description:
      " Hopscotch Baby Boys Cotton and Spandex Half Sleeves Applique Bow Solid Romper in Blue Color",
    image: "https://m.media-amazon.com/images/I/61Eyv-MHHGL._UX679_.jpg",
  },
  {
    id: "kids11",
    name: "T-shirts",
    price: "700",
    description: " woonie Baby Girl's Fit And Flare Frock Set with hat.",
    image: "https://m.media-amazon.com/images/I/31BZCo3lsSL.jpg",
  },
  {
    id: "kids12",
    name: "Frock",
    price: "711",
    description: "Baby girls frock dress violet color, kneee-length.",
    image: "https://m.media-amazon.com/images/I/7113XqJIZ9L._UX679_.jpg",
  },
];

// let shop = document.getElementById("shop");
// let generateShop = () => {
//   return (shop.innerHTML = shopItemsData
//     .map((x) => {
//       let { id, name, price, description, image } = x;
//       return `
// <div class="col" id=product-id-${id}>
//         <div class="card">
//           <img
//             src=${image}
//             class="card-img-top pt-3"
//             alt="..."
//           />
//           <div class="card-body text-center">
//             <h5 class="card-title fw-bold">${name}</h5>
//             <p class="price fw-semibold h5">₹ ${price}</p>
//             <p class="card-text">
//              ${description}
//             </p>
//             <button class="add-cart d-flex align-items-center">
//               <i class="add-to-cart fa-solid fa-cart-shopping"></i>
//               <a href="#" class="btn fw-bold">Add To Cart</a>
//             </button>
//           </div>
//         </div>
//       </div>
// `;
//     })
//     .join(""));
// };

// generateShop();

// on loading the page cart items number in header should not be zero
window.onload = function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartCount");
  if (productNumbers) {
    document.querySelector(".cart span").innerHTML = productNumbers;
  }
};

// Cart number updating in header
let carts = document.querySelectorAll(".add-cart");
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", (e) => {
    e.preventDefault();
    cartNumbers();
  });
}

function cartNumbers() {
  let productNumbers = localStorage.getItem("cartCount");
  productNumbers = parseInt(productNumbers);
  if (productNumbers) {
    localStorage.setItem("cartCount", productNumbers + 1);
    document.querySelector(".cart span").innerHTML = productNumbers + 1;
  } else {
    localStorage.setItem("cartCount", 1);
    document.querySelector(".cart span").innerHTML = 1;
  }
}
