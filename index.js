// Cierra el nav-bar cuando se hace click

$(".nav-link").on("click",function() {
    $(".navbar-collapse").collapse("hide");
  });

// Cambiar cartas
$(".ref-button").on("click", function(){
    $(".referencia-trabajo").toggle("swing")
    $(".descrip-trabajo").toggle("swing")
})