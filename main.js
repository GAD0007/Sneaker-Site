"use strict";
// shoe price obect
const shoePricesObj = {
    shoePrice: 125,
}
console.log(shoePricesObj.shoePrice)
const smallCounterCart = document.querySelector(".small-counter")

const thumbNail1 = document.querySelectorAll(".shoe-1");
const thumbNail2 = document.querySelectorAll(".shoe-2");
const thumbNail3 = document.querySelectorAll(".shoe-3");
const thumbNail4 = document.querySelectorAll(".shoe-4");

// overlay
const overlay = document.querySelector(".overlay");
const overlayDisplay = document.querySelector(".overlay-box");
const closeOverlay = document.querySelector(".close-overlay");

// cart
const cartBtn = document.querySelector(".cart-show-hide");
const cartBox = document.querySelector(".cart-background");
const addToCartBtn = document.getElementById("addcart-btn");
const emptyCart = document.querySelector(".empty-cart");
emptyCart.classList.remove('empty-cart-hidden')

// emptyCart.remove('empty-cart-hidden')
const loadedCart = document.querySelector('.cart-image-text')

// cart texts
const counterOnCart = document.querySelector(".item-count")
const itemCostOnCart = document.querySelector(".item-cost")
const counter = document.querySelector('.counter-value')
const totalItemPrice = document.querySelector('.total-price')

itemCostOnCart.textContent = `$${shoePricesObj.shoePrice}`



let clickCount = 0;
cartBtn.addEventListener("click", function () {
    clickCount++;

  cartBox.classList.remove("hidden-cart");
  if (clickCount === 2) {
    clickCount = 0;
    cartBox.classList.add("hidden-cart");
}
});

// Big images display
const mainImgDisplay = document.querySelector(".product1-img");
const smallImgDisplay = document.querySelector(".product1-img2");

// overlay open and close function
const overlayOpen = function () {
    document.querySelector(".overlay").classList.remove("hide-overlay");
    document.querySelector(".overlay-box").classList.remove("hide-overlay");
};

// images array
const imagesSelection = [1, 2, 3, 4];
console.log(imagesSelection[3]);

// document.querySelector('.hide-overlay').style.display = "block"
// document.querySelector('.overlay').style.display = "block"

//
// product1-img

// for (let i = 0; i < mainImgDisplay.length; i++)

mainImgDisplay.addEventListener("click", function () {
  mainImgDisplay.src = `images/image-product-${imagesSelection[0]}.jpg`;
  smallImgDisplay.src = `images/image-product-${imagesSelection[0]}.jpg`;
  overlayOpen();
});

// close overlay
closeOverlay.addEventListener("click", function () {
  overlay.classList.add("hide-overlay");
  overlayDisplay.classList.add("hide-overlay");
//   thumbNail1[i].classList.remove("shoe-active");
//   thumbNail2[i].classList.remove("shoe-active");
//   thumbNail3[i].classList.remove("shoe-active");
//   thumbNail4[i].classList.remove("shoe-active");
});

// thumbnail buttons
// thumbnail button 1
for (let i = 0; i < thumbNail1.length; i++)
  thumbNail1[i].addEventListener("click", function name(params) {
    // closeOverlay.classList.remove('hide-overlay')

    console.log("hmmm");
    mainImgDisplay.src = `images/image-product-${imagesSelection[0]}.jpg`;
    smallImgDisplay.src = `images/image-product-${imagesSelection[0]}.jpg`;
    // thumbNail1[i].classList.add("shoe-active");
    // thumbNail2[i].classList.remove("shoe-active");
    // thumbNail3[i].classList.remove("shoe-active");
    // thumbNail4[i].classList.remove("shoe-active");
    thumbNail1.forEach((element) => {
        element.classList.add("shoe-active");
        
    });
    thumbNail2.forEach((element) => {
        element.classList.remove("shoe-active");
        
    });
    thumbNail3.forEach((element) => {
        element.classList.remove("shoe-active");
        
    });
    thumbNail4.forEach((element) => {
        element.classList.remove("shoe-active");
        
    });
    overlayOpen();
  });

// thumbnail button 2
for (let i = 0; i < thumbNail2.length; i++)
  thumbNail2[i].addEventListener("click", function name(params) {
    console.log("hmmm2");
    mainImgDisplay.src = `images/image-product-${imagesSelection[1]}.jpg`;
    smallImgDisplay.src = `images/image-product-${imagesSelection[1]}.jpg`;
    // thumbNail1[i].classList.remove("shoe-active");
    // thumbNail2[i].classList.add("shoe-active");
    // thumbNail3[i].classList.remove("shoe-active");
    // thumbNail4[i].classList.remove("shoe-active");
    thumbNail1.forEach((element) => {
        element.classList.remove("shoe-active");
        
    });
    thumbNail2.forEach((element) => {
        element.classList.add("shoe-active");
        
    });
    thumbNail3.forEach((element) => {
        element.classList.remove("shoe-active");
        
    });
    thumbNail4.forEach((element) => {
        element.classList.remove("shoe-active");
        
    });
    overlayOpen();
  });

// thumbnail button 3
for (let i = 0; i < thumbNail3.length; i++)
  thumbNail3[i].addEventListener("click", function name(params) {
    mainImgDisplay.src = `images/image-product-${imagesSelection[2]}.jpg`;
    smallImgDisplay.src = `images/image-product-${imagesSelection[2]}.jpg`;
    // thumbNail1[i].classList.remove("shoe-active");
    // thumbNail2[i].classList.remove("shoe-active");
    // thumbNail3[i].classList.add("shoe-active");
    // thumbNail4[i].classList.remove("shoe-active");
    thumbNail1.forEach((element) => {
        element.classList.remove("shoe-active");
        
    });
    thumbNail2.forEach((element) => {
        element.classList.remove("shoe-active");
        
    });
    thumbNail3.forEach((element) => {
        element.classList.add("shoe-active");
        
    });
    thumbNail4.forEach((element) => {
        element.classList.remove("shoe-active");
        
    });
    overlayOpen();
  });
// thumbnail button 4
for (let i = 0; i < thumbNail4.length; i++)
  thumbNail4[i].addEventListener("click", function name(params) {
    mainImgDisplay.src = `images/image-product-${imagesSelection[3]}.jpg`;
    smallImgDisplay.src = `images/image-product-${imagesSelection[3]}.jpg`;
    // thumbNail1[i].classList.remove("shoe-active");
    // thumbNail2[i].classList.remove("shoe-active");
    // thumbNail3[i].classList.remove("shoe-active");
    thumbNail1.forEach((element) => {
        element.classList.remove("shoe-active");
        
    });
    thumbNail2.forEach((element) => {
        element.classList.remove("shoe-active");
        
    });
    thumbNail3.forEach((element) => {
        element.classList.remove("shoe-active");
        
    });
    thumbNail4.forEach((element) => {
        element.classList.add("shoe-active");
        
    });
    overlayOpen();
  });

//   counter.textContent = 2
let clickCount1 = 0;

  const minusBtn = document.getElementById('minus-btn')
  minusBtn.addEventListener('click',function () {
    console.log('minus');
   if (clickCount1 > 1) {
    clickCount1--
    counter.textContent = clickCount1
    smallCounterCart.textContent = clickCount1

    counterOnCart.textContent = clickCount1
totalItemPrice.textContent = `$${shoePricesObj.shoePrice * clickCount1}`



    
   }else {
    console.log('switch up');
    clickCount1 = 0
    counter.textContent = clickCount1
    counterOnCart.textContent = clickCount1
    smallCounterCart.classList.add('hidden-small-counter')

    emptyCart.classList.remove('empty-cart-hidden')
    loadedCart.classList.add('hidden-cart-selection')
   }
    
  })
  const PlusBtn = document.getElementById('plus-btn')
  PlusBtn.addEventListener('click',function () {
      console.log('plus');
      if (clickCount1 < 10) {
        clickCount1++
       console.log(clickCount1);
    counter.textContent = clickCount1
    smallCounterCart.textContent = clickCount1

    counterOnCart.textContent = clickCount1
totalItemPrice.textContent = `$${shoePricesObj.shoePrice * clickCount1}`


    
   }


    
  })
  
  addToCartBtn.addEventListener('click',function () {
    clickCount = 1

    if (clickCount1 < 1) {
        console.log('empty');
        cartBox.classList.remove("hidden-cart");
        emptyCart.classList.remove('empty-cart-hidden')
        loadedCart.classList.add('hidden-cart-selection')
        
    } else {
        console.log('loaded');
        smallCounterCart.textContent = clickCount1
        smallCounterCart.classList.remove('hidden-small-counter')

        cartBox.classList.remove("hidden-cart");
        emptyCart.classList.add('empty-cart-hidden')
        loadedCart.classList.remove('hidden-cart-selection')

        
    }

  })