var productListData = [];

$(document).ready(function() {
    displayProducts();
});
$("#add_product").on('submit', addUser);

function displayProducts() {
    $.getJSON('../API/ProductList', function(data) {
        $.each(data, function() {
            $("#productList").append("<div class='product'>"
                +"<div class='product-details'>"
                +"<h1 class='product-title'>"+this.title+" - <span class='product-price'>"+this.price+"</span></h1>"
                +"<p class='product-description'>"+this.description+"</p>"
                +"</div><div class='product-img'>"
                +"<img src='/pics/productPhotos/IMG_2084.jpg'/>"
                +"</div><div class='product-actions'>"
                +"<a href='"+this.url+"'>Check it Out</a>"
                +"</div></div>");
            productListData = data;
        });
    });
}
function addUser(event) {
    event.preventDefault();

    var isValid = validateInput("#new-product-form input");

    if(isValid) {
        var newProduct = {
            'title': $("#new-product-form #title").val(),
            'price': $("#new-produt-form #price").val()
        }

        $.ajax({
            type:'POST',
            data:newProduct,
            url:'../API/NewProduct',
            dataType:'JSON'
        }).done(function(response) {
            if (response.msg === '') {
                $('#new-product-form .input').val('');
                $(location).attr('href', '/Shop');
            } else {
                alert(response.msg);
            }
        });
    }
}
function validateInput(selector) {
    var isError = 0;
    $(selector).each(function(index, val) {
        if($(this).val() === '') { isError++; }
    });
    return (isError === 0) ? true : false;
}
