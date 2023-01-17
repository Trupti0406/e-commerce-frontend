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

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}
window.onload = function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
};

function cartNumbers(product, action) {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);

  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (action) {
    localStorage.setItem("cartNumbers", productNumbers - 1);
    document.querySelector(".cart span").textContent = productNumbers - 1;
    console.log("action running");
  } else if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }
  setItems(product);
}

function setItems(product) {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    let currentProduct = product.name;

    if (cartItems[currentProduct] == undefined) {
      cartItems = {
        ...cartItems,
        [currentProduct]: product,
      };
    }
    cartItems[currentProduct].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.name]: product,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product, action) {
  let cart = localStorage.getItem("totalCost");

  if (action) {
    cart = parseInt(cart);

    localStorage.setItem("totalCost", parseInt(cart) - product.price);
  } else if (cart != null) {
    cart = parseInt(cart);
    localStorage.setItem("totalCost", parseInt(cart) + parseInt(product.price));
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  let cart = localStorage.getItem("totalCost");
  cart = parseInt(cart);

  let productContainer = document.querySelector(".products");

  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map((item, index) => {
      productContainer.innerHTML += `
      <div class="product">
      <i class="fas fa-trash-alt h4"></i>
      <img src=${item.image}/>
                <span class="sm-hide">${item.name}</span>
            </div>
            <div class="price sm-hide">₹ ${item.price},00</div>
            <div class="quantity">
                 <i class="decrease fa-solid fa-minus"></i>
                    <span>${item.inCart}</span>
                     <i class="increase fa-solid fa-plus"></i> 
            </div>
            <div class="total">₹ ${item.inCart * item.price},00</div>`;
    });

    productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">Basket Total</h4>
                <h4 class="basketTotal"> ₹ ${cart},00</h4>
            </div>`;

    deleteButtons();
    manageQuantity();
  }
}

function manageQuantity() {
  let decreaseButtons = document.querySelectorAll(".decrease");
  let increaseButtons = document.querySelectorAll(".increase");
  let currentQuantity = 0;
  let currentProduct = "";
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  for (let i = 0; i < increaseButtons.length; i++) {
    decreaseButtons[i].addEventListener("click", () => {
      console.log(cartItems);
      currentQuantity =
        decreaseButtons[i].parentElement.querySelector("span").textContent;
      console.log(currentQuantity);
      currentProduct = decreaseButtons[
        i
      ].parentElement.previousElementSibling.previousElementSibling
        .querySelector("span")
        .textContent.toLocaleLowerCase()
        .replace(/ /g, "")
        .trim();
      console.log(currentProduct);

      if (cartItems[currentProduct].inCart > 1) {
        cartItems[currentProduct].inCart -= 1;
        cartNumbers(cartItems[currentProduct], "decrease");
        totalCost(cartItems[currentProduct], "decrease");
        localStorage.setItem("productsInCart", JSON.stringify(cartItems));
        displayCart();
      }
    });

    increaseButtons[i].addEventListener("click", () => {
      console.log(cartItems);
      currentQuantity =
        increaseButtons[i].parentElement.querySelector("span").textContent;
      console.log(currentQuantity);
      currentProduct = increaseButtons[
        i
      ].parentElement.previousElementSibling.previousElementSibling
        .querySelector("span")
        .textContent.toLocaleLowerCase()
        .replace(/ /g, "")
        .trim();
      console.log(currentProduct);

      cartItems[currentProduct].inCart += 1;
      cartNumbers(cartItems[currentProduct]);
      totalCost(cartItems[currentProduct]);
      localStorage.setItem("productsInCart", JSON.stringify(cartItems));
      displayCart();
    });
  }
}

function deleteButtons() {  
  let deleteButtons = document.querySelectorAll(".product  fa-trash-alt");
  let productNumbers = localStorage.getItem("cartNumbers");
  let cartCost = localStorage.getItem("totalCost");
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productName;
  console.log(cartItems);

  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", () => {
      productName = deleteButtons[i].parentElement.textContent
        .toLocaleLowerCase()
        .replace(/ /g, "")
        .trim();

      localStorage.setItem(
        "cartNumbers",
        productNumbers - cartItems[productName].inCart
      );
      localStorage.setItem(
        "totalCost",
        cartCost - cartItems[productName].price * cartItems[productName].inCart
      );

      delete cartItems[productName];
      localStorage.setItem("productsInCart", JSON.stringify(cartItems));

      displayCart();
      onLoadCartNumbers();
    });
  }
}

// onLoadCartNumbers();
displayCart();
