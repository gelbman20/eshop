let cart = {};

function loadCart() {
  if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
    showCart();
  } else  {
    $('.main-cart').html('Cart is empty')
  }
}

function showCart() {
  $.getJSON('goods.json', function (data) {
    let goods = data;
    let out = '';
    for (let id in cart) {
      let image = `images/`+`${goods[id].img}`;
      out += `<button>X</button>
              <div> <img src=${image}> 
              <p>${goods[id].name}</p>
              <p>${cart[id]}</p>
              </div>`;
    }

    $('.main-cart').html(out);
  })
}

$(document).ready(function () {
  loadCart();
});