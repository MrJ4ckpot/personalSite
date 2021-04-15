
$(".miniatura").on("click", function(){

   chiudiSplash();
   var dataNumero = $(this).attr('data-slide');
   var dataNome = $(this).attr('data-nome');

   $("."+dataNome+"SP.splash"+dataNumero).fadeIn(400);
   console.log("."+dataNome+"SP.Splash"+dataNumero);
});




function chiudiSplash(){

  for (var i=0; i<=5; i++){
    $(".splash"+i).fadeOut(0, function(){
    //  $(".Splash"+i).fadeIn("invis");
    });

  }
//  $(".Splash1").removeClass("vedi");

}


$("#lista a").on("click", function(){

    chiudiSplash();

    $(".godspeedSP.splash1").fadeIn(0);
    $(".blueShiftSP.splash1").fadeIn(0);
    $(".firenzeSP.splash1").fadeIn(0);
    $(".spaceSP.splash1").fadeIn(0);
    $(".printSP.splash1").fadeIn(0);
    $(".beholderSP.splash1").fadeIn(0);
    $(".tabulaSP.splash1").fadeIn(0);
    $(".aimSP.splash1").fadeIn(0);
    $(".triskelSP.splash1").fadeIn(0);
    $(".dubaiSP.splash1").fadeIn(0);
});
