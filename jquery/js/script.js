const productComponent = product => {
  return `
  <div class="card mb-3 border-2 border-dark shadow-sm draggable flex-row d-flex product-card" data-product-id="${product.id}">
      <div class="col-6 item-bg h-100" style="background-image: url(${product.photo})"></div>
      <div class="col-6">
        <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text overflow-hidden">${product.description}</p>
            <div class="d-flex align-items-center justify-content-between">
                <span class="display-5">${product.price} L.E</span>
                <button data-product-id="${product.id}" data-type="add" class="item-btn btn btn-success">Order</button>
            </div>
        </div>
    </div>
  </div>
`
};
const cartProductComponent = product => {
  return `
  <div class="card mb-3 border-2 cart-item border-success shadow-sm draggable flex-column d-flex" data-product-id="${product.id}">
      <div class="item-bg cart" style="background-image: url(${product.photo})"></div>
      <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <div class="d-flex flex-column align-items-center justify-content-center">
            <div class="d-flex align-items-center">
              <button disabled class="btn btn-warning item-btn" data-product-id="${product.id}" data-type="decrease">
                  <i class="fa fa-minus"></i>
              </button>
              <div class="fw-bold quantity display-5 mx-2">${product.quantity}</div>
              <button class="btn btn-success item-btn" data-product-id="${product.id}" data-type="increase">
                  <i class="fa fa-plus"></i>
              </button>
            </div>
            <div class="d-flex align-items-center justify-content-between">
                <span class="display-5 cart-product-total">${product.price * product.quantity} L.E</span>
                <button data-product-id="${product.id}" class="ms-4 btn btn-danger item-btn" data-type="remove">Remove <i class="fa fa-remove"></i></button>
            </div>
          </div>
      </div>
  </div>
`
};
const cartItems = JSON.parse(localStorage.getItem('cartItems') ?? "[]");

document.body.onload = () => {
  (($) => {
    const appendItem = (cartItem) => {
      $("#order-list").append(cartProductComponent(cartItem));
      $("#order-list .draggable").draggable({
        stop: (e) => {
          const element = $(e.target);
          if (Math.abs(e.offsetX) > element.width() + 10) {
            removeProduct(element);
          }
        },
        revert: true,
      });
      if (cartItem.quantity > 1) {
        $(`.cart-item[data-product-id="${cartItem.id}"] .item-btn[data-type="decrease"]`).prop("disabled", false);
      }
    }
    const updateCartTotal = () => {
      const vat = Math.ceil(total * 0.14);
      const subtotal = total + vat;
      let final = subtotal;
      $("#receipt #total").text(`${total} L.E`);
      $("#receipt #vat").text(`${vat} L.E`);
      if (subtotal > 300) {
        const discount = Math.ceil(subtotal * 0.1);
        final = Math.ceil(subtotal * 0.9);
        $("#receipt #discount").text(`${discount} L.E`).parent().removeClass('d-none');
        $("#receipt #discounted").removeClass('d-none').text(`${subtotal} L.E`);
      } else {
        $("#receipt #discount").parent().addClass('d-none');
        $("#receipt #discounted").addClass('d-none');
      }
      $("#receipt #final").text(`${final} L.E`);
    }
    const updateCart = (price) => {
      total += price;
      updateCartTotal();
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    };
    const updateCartProductTotal = (productId, productIndex) => {
      $(`.cart-item[data-product-id="${productId}"] .cart-product-total`).text(`${cartItems[productIndex].quantity * cartItems[productIndex].price} L.E`);
    }
    const removeProduct = element => {
      const productId = parseInt(element.attr('data-product-id'));
      const index = cartItems.findIndex(({id}) => id === productId);
      const product = cartItems[index];
      cartItems.splice(index, 1);
      updateCart(-1 * product.quantity * product.price);
      element.remove();
      if (cartItems.length === 0) {
        $("#order-empty, #receipt, #checkout").toggleClass('d-none');
      }
    };
    const addProduct = (productId) => {
      if (cartItems.length === 0) {
        $("#order-empty, #receipt, #checkout").toggleClass('d-none');
      }
      const productIndex = cartItems.findIndex(({id}) => id === productId);
      let price;
      if (productIndex !== -1) {
        cartItems[productIndex].quantity++;
        $(`.cart-item[data-product-id="${productId}"] .quantity`).text(cartItems[productIndex].quantity);
        $(`.cart-item[data-product-id="${productId}"] .item-btn[data-type="decrease"]`).prop('disabled', false);
        price = cartItems[productIndex].price;
        updateCartProductTotal(productId, productIndex);
      } else {
        const {description, ...item} = items.filter(({id}) => id === productId)[0];
        const cartItem = {
          ...item,
          quantity: 1
        };
        price = item.price;
        cartItems.push(cartItem);
        appendItem(cartItem);
      }
      return price;
    }
    let total = 0;
    if (cartItems.length) {
      for (const cartItem of cartItems) {
        appendItem(cartItem);
        total += (cartItem.price * cartItem.quantity);
      }
      updateCartTotal();
      $("#order-empty, #receipt, #checkout").toggleClass('d-none');
    }
    items.slice(0, 5).forEach((item) => {
      $("#products-list").append(productComponent(item));
    });
    $(".draggable").draggable({
      appendTo: '#order-list',
      connectToSortable: ".sortable",
      cursor: "crosshair",
      revert: true
    });
    $('body').on('click', '.item-btn', (e) => {
      const btn = $(e.currentTarget);
      const type = btn.attr('data-type');
      const productId = parseInt(btn.attr('data-product-id'), 10);
      const productIndex = cartItems.findIndex(({id}) => id === productId);
      let price = 0;
      switch (type) {
        case "increase":
          cartItems[productIndex].quantity++;
          price = cartItems[productIndex].price;
          btn.siblings('button').prop('disabled', false);
          btn.siblings('.quantity').text(cartItems[productIndex].quantity);
          updateCartProductTotal(productId, productIndex);
          break;
        case "decrease":
          cartItems[productIndex].quantity--;
          price = -1 * cartItems[productIndex].price;
          if (cartItems[productIndex].quantity === 1) {
            btn.prop('disabled', true);
          }
          btn.siblings('.quantity').text(cartItems[productIndex].quantity);
          updateCartProductTotal(productId, productIndex);
          break;
        case "remove":
          const element = $(`.cart-item[data-product-id="${productId}"]`);
          removeProduct(element);
          break;
        case "add":
          price = addProduct(productId);
          break;
      }
      updateCart(price);
    });
    $(".droppable").droppable({
      drop: (_, ui) => {
        const draggedItem = $(ui.draggable);
        if (draggedItem.hasClass('cart-item')) {
          return;
        }
        const productId = parseInt(draggedItem.attr('data-product-id'), 10);
        const price = addProduct(productId);
        updateCart(price);
      }
    });
  })(jQuery || window.jQuery)
};
