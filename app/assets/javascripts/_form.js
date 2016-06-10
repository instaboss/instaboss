$(document).ready(function() {
  $(document).on('page:change', function () {

    var womensCategories = {'Accessories': ['Lingerie & Underwear', 'Hats', 'Bags & Purses', 'Jewellery'], 'Dresses': ['Day Dresses', 'Evening Dresses'], 'Jeans Trousers & Leggings': ['Jeans', 'Trousers','Leggings'], 'Home & Lifestyle': ['Home & Lifestyle'], 'Shoes': ['Boots', 'Trainers', 'Heels', 'Wedges', 'Flats'], 'Shorts & Skirts': ['Shorts', 'Skirts'], 'Sunglasses & Watches': ['Sunglasses', 'Watches'], 'Swim & Beachwear': ['Bikinis', 'Swimsuits', 'Other'], 'Tops': ['T-Shirts & Vests', 'Shirts & Blouses', 'Hoodies & Sweatshirts', 'Jackets & Coats', 'Formal'] };

    var mensCategories = {'Accessories': ['Hats', 'Grooming', 'Jewellery'], 'Formal': ['Suits', 'Accessories'], 'Lifestyle': ['Lifestyle'], 'Longs': ['Jeans', 'Chinos', 'Joggers'], 'Shoes': ['Boat', 'Boots', 'Trainers', 'Formal', 'Other'], 'Shorts & Swimwear': ['Shorts', 'Swimwear'], 'Sunglasses & Watches': ['Sunglasses', 'Watches'] , 'Tops': ['T-Shirts & Polos', 'Shirts', 'Hoodies & Sweatshirts', 'Jackets & Coats'] };

    var sex = $('#item-sex').val();
    var category = $('#item-category').val();
    var itemSubCategory = $('.item-new-category').data('temp');

    if ( sex === 'Mens' ) {
     $.each( mensCategories, function( key, value ) {
        if (key === category) {
          var subCategory = value;
          $.each( subCategory, function( index, value ) {
            if (value !== itemSubCategory) {
             $('#item-new-category').append("<option value=" + value + ">" + value + "</option>");
            }
          });
        }
     });
    } else if (sex == 'Womens') {
      $.each( womensCategories, function( key, value ) {
        if (key === category) {
          var subCategory = value;
          $.each( subCategory, function( index, value ) {
            if (value !== itemSubCategory) {
             $('#item-new-category').append("<option value=" + value + ">" + value + "</option>");
            }
          });
        }
     });
    }

    $("#item-category").change(function(){
      $('#item-sub-category').children().remove().end()
        if ( sex === 'Mens' ) {
          $.each( mensCategories, function( key, value ) {
            if (key === $("#item-category").val()) {
              var subCategory = value;
              $.each( subCategory, function( index, value ) {
                if (value !== itemSubCategory) {
                  $('#item-sub-category').append("<option value=" + value + ">" + value + "</option>");
                }
              });
            }
          });
        } else if (sex === 'Womens') {
          $.each( womensCategories, function( key, value ) {
            if (key === $("#item-category").val()) {
              var subCategory = value;
              $.each( subCategory, function( index, value ) {
                if (value !== itemSubCategory) {
                  $('#item-sub-category').append("<option value=" + value + ">" + value + "</option>");
                }
              });
            }
          });
        }
      });


    $('.fashion_item_form').validate({
      rules: {
        'FashionItem[short_description]' : {
              required: true,
              maxlength: 25
          },
          'FashionItem[item_image]' : {
              required: true
          },
          'FashionItem[category]': {
              required: true
          },
          'FashionItem[sub_category]': {
              required: true
          },
          'FashionItem[price]': {
              required: true,
              number : true
          },
          'FashionItem[unique_affiliate_url]': {
              required: true
          }
      }
    });

    $('.edit_fashion_item').validate({
      rules: {
        'FashionItem[short_description]' : {
              required: true,
              maxlength: 25
          },
        'FashionItem[item_image]' : {
              required: false
          },
          'FashionItem[category]': {
              required: true
          },
          'FashionItem[sub_category]': {
              required: true
          },
          'FashionItem[price]': {
              required: true,
              number : true
          },
          'FashionItem[unique_affiliate_url]': {
              required: true
          }
      }
    });

    $("#item-on-sale").change(function(){
      if ($("#item-on-sale").val() === 'true' ) {
        $('#item-sale-price').show();
      } else if ($("#item-on-sale").val() === 'false' ) {
        $('#item-sale-price').hide();
      }
    });

    if ($("#item-on-sale").val() === 'false' ) {
      $('#item-sale-price').hide();
    }

  });
});
