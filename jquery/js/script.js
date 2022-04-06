const productComponent = product => {
  return `
  <div class="card mb-3 draggable flex-row d-flex product-card" data-product-id="${product.id}">
      <img src="${product.photo}" class="card-img-top" alt="product image">
      <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text overflow-hidden">${product.description}</p>
          <button data-product-id="${product.id}" class="btn btn-primary">Order</button>
      </div>
  </div>
`
};
document.body.onload = () => {
  (($) => {
    items.slice(0,5).forEach((item) => {
      $("#products-list").append(productComponent(item));
    });
    $( ".draggable" ).draggable({
      appendTo: '#order-list',
      connectToSortable: ".sortable",
      cursor: "crosshair",
      revert: true
    });
    $( ".droppable" ).droppable({
      drop:function (e) {
        console.log($(this))
        console.log(e)
      }
    });
  })(jQuery || window.jQuery)
};
