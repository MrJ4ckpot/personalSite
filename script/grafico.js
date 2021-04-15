var intHt;
var motHt;
var proHt;
var digHt;
var makHt;
var friHt;

var tempHt;
var tempRot;

$( document ).ready(function() {

  // CAMPIONA TUTTE LE ALTEZZE DEI PARAGRAFI E PARTE DAL PRIMO
/*  intHt = $(".skillpar[data-skill='int']").height();
  motHt = $(".skillpar[data-skill='mot']").height();
  proHt = $(".skillpar[data-skill='pro']").height();
  digHt = $(".skillpar[data-skill='dig']").height();
  makHt = $(".skillpar[data-skill='mak']").height();
  friHt = $(".skillpar[data-skill='fri']").height();


  $(".skillpar[data-skill='int']").attr('data-ht', intHt);
  $(".skillpar[data-skill='mot']").attr('data-ht', motHt);
  $(".skillpar[data-skill='pro']").attr('data-ht', proHt);
  $(".skillpar[data-skill='dig']").attr('data-ht', digHt);
  $(".skillpar[data-skill='mak']").attr('data-ht', makHt);
  $(".skillpar[data-skill='fri']").attr('data-ht', friHt);

  $(".skillpar").css("height", "0px");
  $(".skillpar").hide();
  $(".skillpar[data-skill='int']").show();
  $(".skillpar[data-skill='int']").css("height", intHt); */

//  $(".skillpar[data-skill='int']").css("height", intHt);

$(".skillpar").hide();
$(".skillpar[data-skill='int']").show();

});

$(".spicchio").on( "click", function(){


// PRENDE IL NOME DELLO SPICCHIO E LO SELEZIONA
  var tempAttr = $(this).attr("data-skill");

  $(".spicchio").removeClass("select");
  $(this).addClass("select");

  $(".palla").removeClass("pallaSel");
  $(".palla[data-skill='"+tempAttr+"']").addClass("pallaSel");

  $(".cls-6").removeClass("textSel");
  $(".cls-6[data-skill='"+tempAttr+"']").addClass("textSel");

/*  // RUOTA IL GRAFICO METTENDO IN ALTO LA SELEZIONE
  tempRot = $(".skillpar[data-skill='"+tempAttr+"']").attr("data-ord")*60;
  $("#radar").css("transform", "rotate("+tempRot+"deg)");   */


   // PRENDE L'ALTEZZA DEL PARAGRAFO E LO FA APPARIRE
   tempHt = $(".skillpar[data-skill='"+tempAttr+"']").attr("data-ht");

      $(".skillpar").hide();
                  //  .css("height", "0");

      $(".skillpar[data-skill='"+tempAttr+"']").delay(300)
                                               .fadeIn(600);
                                            //   .animate({height: tempHt}, 600);



   $('html,body').delay(310)
                .animate({
                   scrollTop: $('#segnalibro').offset().top
                 },600);

});
