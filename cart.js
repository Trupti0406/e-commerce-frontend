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

// Adding data to local storage
// const addToCartBtn = document.getElementsByClassName("add-cart");
// for (let i = 0; i < addToCartBtn.length; i++) {
//   addToCartBtn[i].addEventListener("Click", function () {
//     console.log(i);
//   });
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
    id: "kids1",
    name: "Jacket",
    price: "599",
    description: "Black Kids Polyester Blend Winter Wear Jackets with cap.",
    image: "https://m.media-amazon.com/images/I/81TLGPPXpxL._AC_UL320_.jpg",
  },
  {
    id: "kids1",
    name: "Jacket",
    price: "599",
    description: "Black Kids Polyester Blend Winter Wear Jackets with cap.",
    image: "https://m.media-amazon.com/images/I/81TLGPPXpxL._AC_UL320_.jpg",
  },
  {
    id: "kids1",
    name: "Jacket",
    price: "599",
    description: "Black Kids Polyester Blend Winter Wear Jackets with cap.",
    image: "https://m.media-amazon.com/images/I/81TLGPPXpxL._AC_UL320_.jpg",
  },
  {
    id: "kids1",
    name: "Jacket",
    price: "599",
    description: "Black Kids Polyester Blend Winter Wear Jackets with cap.",
    image: "https://m.media-amazon.com/images/I/81TLGPPXpxL._AC_UL320_.jpg",
  },
  {
    id: "kids1",
    name: "Jacket",
    price: "599",
    description: "Black Kids Polyester Blend Winter Wear Jackets with cap.",
    image: "https://m.media-amazon.com/images/I/81TLGPPXpxL._AC_UL320_.jpg",
  },
  {
    id: "kids1",
    name: "Jacket",
    price: "599",
    description: "Black Kids Polyester Blend Winter Wear Jackets with cap.",
    image: "https://m.media-amazon.com/images/I/81TLGPPXpxL._AC_UL320_.jpg",
  },
  {
    id: "kids1",
    name: "Jacket",
    price: "599",
    description: "Black Kids Polyester Blend Winter Wear Jackets with cap.",
    image: "https://m.media-amazon.com/images/I/81TLGPPXpxL._AC_UL320_.jpg",
  },
  {
    id: "kids1",
    name: "Jacket",
    price: "599",
    description: "Black Kids Polyester Blend Winter Wear Jackets with cap.",
    image: "https://m.media-amazon.com/images/I/81TLGPPXpxL._AC_UL320_.jpg",
  },
  {
    id: "kids1",
    name: "Jacket",
    price: "599",
    description: "Black Kids Polyester Blend Winter Wear Jackets with cap.",
    image: "https://m.media-amazon.com/images/I/81TLGPPXpxL._AC_UL320_.jpg",
  },
  {
    id: "kids1",
    name: "Jacket",
    price: "599",
    description: "Black Kids Polyester Blend Winter Wear Jackets with cap.",
    image: "https://m.media-amazon.com/images/I/81TLGPPXpxL._AC_UL320_.jpg",
  },
  {
    id: "kids1",
    name: "Jacket",
    price: "599",
    description: "Black Kids Polyester Blend Winter Wear Jackets with cap.",
    image: "https://m.media-amazon.com/images/I/81TLGPPXpxL._AC_UL320_.jpg",
  },
];

let shop = document.getElementById("shop");
let generateShop = () => {
  return (shop.innerHTML = shopItemsData.map((x) => {
    return `
<div class="col">
        <div class="card">
          <img
            src="https://m.media-amazon.com/images/I/81TLGPPXpxL._AC_UL320_.jpg"
            class="card-img-top pt-3"
            alt="..."
          />
          <div class="card-body text-center">
            <h5 class="card-title fw-bold">Jacket</h5>
            <p class="price fw-semibold h5">₹ 599</p>
            <p class="card-text">
              Black Kids Polyester Blend Winter Wear Jackets with cap.
            </p>
            <button class="add-cart d-flex align-items-center">
              <i class="add-to-cart fa-solid fa-cart-shopping"></i>
              <a href="#" class="btn fw-bold">Add To Cart</a>
            </button>
          </div>
        </div>
      </div>
`;
  }).join(""));
};

generateShop();
