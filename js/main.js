/**
 * Created by asmodey on 8/6/17.
 */
let cart = {};

function init() {
  $.getJSON("goods.json", goodsOut);
}

function goodsOut(data) {

  let out = '';

  for ( let key in data ) {
    out += `<div class="cart">
            <p class="name">${data[key].name}</p>
            <img src="images/${data[key].img}" alt="grape">
            <div class="cost">${data[key].cost}</div>
            <button class="add-to-cart" data-id="${key}">Купить</button>
          </div>`;
  }

  $('.goods-out').html(out);

  $('.add-to-cart').on('click', addToCart)
}

function addToCart() {
  let id = $(this).attr('data-id');
  if (cart[id] === undefined) {
    cart[id] = 1;
  } else {
    cart[id]++;
  }

  showMiniCart();
  saveMiniCart();
}

function saveMiniCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function showMiniCart() {
  let out = '';
  for (let key in cart) {
    out += key + ' --- ' + cart[key] + '<br>';
  }

  $('.mini-cart').html(out);
}

function loadCart() {
  if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
  }
  showMiniCart();
}

$(document).ready(function () {
  init();
  loadCart();
});