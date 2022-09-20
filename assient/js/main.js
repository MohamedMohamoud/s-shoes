const wrapper = document.querySelector(".sliderwrapper");
const menuItems = document.querySelectorAll(".menuitem");
// const products = [
//   {
//     id: 1,
//     title: "Air Force",
//     price: 119,
//     colors: [
//       {
//         code: "black",
//         img: "assient/img/air.png",
//       },
//       {
//         code: "darkblue",
//         img: "assient/img/air2.png",
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: "Air Jordan",
//     price: 149,
//     colors: [
//       {
//         code: "lightgray",
//         img: "assient/img/jordan.png",
//       },
//       {
//         code: "green",
//         img: "assient/img/jordan2.png",
//       },
//     ],
//   },
//   {
//     id: 3,
//     title: "Blazer",
//     price: 109,
//     colors: [
//       {
//         code: "lightgray",
//         img: "assient/img/blazer.png",
//       },
//       {
//         code: "green",
//         img: "assient/img/blazer2.png",
//       },
//     ],
//   },
//   {
//     id: 4,
//     title: "Crater",
//     price: 129,
//     colors: [
//       {
//         code: "black",
//         img: "assient/img/crater.png",
//       },
//       {
//         code: "lightgray",
//         img: "assient/img/crater2.png",
//       },
//     ],
//   },
//   {
//     id: 5,
//     title: "Hippie",
//     price: 99,
//     colors: [
//       {
//         code: "gray",
//         img: "assient/img/hippie.png",
//       },
//       {
//         code: "black",
//         img: "assient/img/hippie2.png",
//       },
//     ],
//   },
// ];
// let choosenProduct = products[0];
// const currentprouductImg = document.querySelector(".productImg");
// const currentproductTitle = document.querySelector(".productTitle");
// const currentproductPrice = document.querySelector(".productPrice");
// const currentProductColors = document.querySelectorAll(".color");
// const currentProductSizes = document.querySelectorAll(".size");
menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      wrapper.style.transform = `translateX(${-100 * index}vw)`;
    });
  });
//       choosenProduct = products[index];
//       currentProductTitle.textContent = choosenProduct.title;
//       currentProductPrice.textContent = "$" + choosenProduct.price;
//       currentprouductImg.src = choosenProduct.colors[0].img;
//       currentProductColors.forEach((color, index) => {
//         color.style.backgroundColor = choosenProduct.colors[index].code;
// 


// paymant///
let productButton = document.querySelector(".productButton");
let payment = document.querySelector(".payment");
let close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});