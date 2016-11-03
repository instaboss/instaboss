$(document).ready(function() {
  $(document).on('page:change',function() {
    var toggleNavCount = 0

    document.querySelector( "#nav-toggle" )
    .addEventListener( "click", function() {
      this.classList.toggle( "active" );
    });

    $("#nav-toggle").click(function(){
    toggleNavCount ++
    $(".hamburger-slider").show()
      if (toggleNavCount % 2 == 0) {
        $(".logo-image").fadeIn()
        $(".mobile_container").css({display: "block"})
        $(".mobile_container_show").css({display: "block"})
        $(".hamburger-slider").animate({
          right: "1000px"
        },300, function(){
        })
      }else if (toggleNavCount % 2 != 0) {
        $(".logo-image").fadeOut()
        $(".hamburger-slider").animate({
          right: "-5px"
        },300, function(){
          $(".mobile_container").css({display: "none"})
          $(".mobile_container_show").css({display: "none"})
        })
      }
    })



  });
}); //end
