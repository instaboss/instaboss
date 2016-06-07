$(document).ready(function() {
  $(document).on('page:change', function () {

    $(".sorting_class_tops>li").click(function(){
      var subCategory = $(this.id).selector;
      var box = $(".box");
      $(".sorting_class_tops>li.btn-active").removeClass("btn-active");
      $(this).addClass("btn-active");

      if (box.hasClass(subCategory)){
        box.css({"display": "none"});
        $("." + subCategory).slideDown(0);
      } else if (subCategory == "All"){
        box.css({"display": "none"});
        box.slideDown(0);
      } else {
        box.css({"display": "none"});
      }
    });
  });
});