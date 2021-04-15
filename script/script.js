

$(".PA").on("click", function(){
  $('body, html').animate({
         scrollTop: $('.aboutMe').offset().top},'2000');
});

$(".PB").on("click", function(){
  $('body, html').animate({
         scrollTop: $('.background').offset().top},'2000');
});

$(".PC").on("click", function(){
  $('body, html').animate({
         scrollTop: $('.skills').offset().top},'slow');
});

$(".PD").on("click", function(){
  $('body, html').animate({
         scrollTop: $('.projects').offset().top},'slow');
});

$(".PE").on("click", function(){
  $('body, html').animate({
         scrollTop: $('.projects').offset().top},'slow');
});

$(".PF").on("click", function(){
  $('body, html').animate({
         scrollTop: $('.contactMe').offset().top},'slow');
});




var godspeedTen=0;
var blueShiftTen=0;
var firenzeTen=0;
var spaceTen=0;
var printTen=0;
var beholderTen=0;
var tabulaTen=0;
var aimTen=0;
var triskelTen=0;
var dubaiTen=0;

$( document ).ready(function() {

  godspeedTen = $("#godspeedF").height();
  console.log(godspeedTen);
  blueShiftTen = $("#blueShiftF").height();
  firenzeTen = $("#firenzeF").height();
  spaceTen = $("#spaceF").height();
  printTen = $("#printF").height();
  beholderTen = $("#beholderF").height();
  tabulaTen = $("#tabulaF").height();
  aimTen = $("#aimF").height();
  triskelTen = $("#triskelF").height();
  dubaiTen = $("#dubaiF").height();

  $("#godspeedF").css("height", "0px");
  $("#blueShiftF").css("height", "0px");
  $("#firenzeF").css("height", "0px");
  $("#spaceF").css("height", "0px");
  $("#printF").css("height", "0px");
  $("#beholderF").css("height", "0px");
  $("#tabulaF").css("height", "0px");
  $("#aimF").css("height", "0px");
  $("#triskelF").css("height", "0px");
  $("#dubaiF").css("height", "0px");
});





  ////X///////////////X///X/////
  ////////X//X///////X//////////
  //X/////X///////////////X/////
  //////X/////////X/////X///////
  ////X///////////////X///X/////
  ////////X//X///////X//////////
  //////X/////////X/////X///////
  ////X///////////////X///X/////
  ////////X//X///////X//////////
  //X/////X///////////////X/////
  //////X/////////X/////X///////

 var blueShiftS = false;

  $("#blueShiftP").on("click", function(){
    if( blueShiftS==false ){

      chiuditutto();

      $("#blueShiftF").css("height", blueShiftTen+"px");
      $('html,body').animate({
             scrollTop: $('#blueShiftP').offset().top},'slow');

             var blueShiftScroll = 570 + $("#blueShiftF").offset().top - $(".projects").offset().top;
             $(".blueShiftI").css({"padding-top": blueShiftScroll+"px"});


      $("#blueShiftP").addClass("openLista");

      $(".draw").fadeOut("slow", function() {
            $(".blueShiftI").fadeIn("slow");
             });

      blueShiftS = true;
    } else {
      $("#blueShiftF").css("height", "0px");
      $("#blueShiftP").removeClass("openLista");

      $(".blueShiftI").fadeOut("slow", function() {
            $(".draw").fadeIn("slow");
             });

      blueShiftS = false;
    }


  });


    var firenzeS = false;

    $("#firenzeP").on("click", function(){
      if( firenzeS==false ){

        chiuditutto();


        $("#firenzeF").css("height", firenzeTen+"px");
        $('html,body').animate({
               scrollTop: $('#firenzeP').offset().top},'slow');

               var firenzeScroll = 570 + $("#firenzeF").offset().top - $(".projects").offset().top;
               $(".firenzeI").css({"padding-top": firenzeScroll+"px"});

        $("#firenzeP").addClass("openLista");

        $(".draw").fadeOut("slow", function() {
              $(".firenzeI").fadeIn("slow");
               });

        firenzeS = true;
      } else {
        $("#firenzeF").css("height", "0px");
        $("#firenzeP").removeClass("openLista");

        $(".firenzeI").fadeOut("slow", function() {
              $(".draw").fadeIn("slow");
               });

        firenzeS = false;
      }
    });


    var spaceS = false;

    $("#spaceP").on("click", function(){
      if( spaceS==false ){

        chiuditutto();


        $("#spaceF").css("height", spaceTen+"px");
        $('html,body').animate({
               scrollTop: $('#spaceP').offset().top},'slow');

               var spaceScroll = 570 + $("#spaceF").offset().top - $(".projects").offset().top;
               $(".spaceI").css({"padding-top": spaceScroll+"px"});

        $("#spaceP").addClass("openLista");

        $(".draw").fadeOut("slow", function() {
              $(".spaceI").fadeIn("slow");
               });

        spaceS = true;
      } else {
        $("#spaceF").css("height", "0px");
        $("#spaceP").removeClass("openLista");

        $(".spaceI").fadeOut("slow", function() {
              $(".draw").fadeIn("slow");
               });

        spaceS = false;
      }
    });


    var beholderS = false;

    $("#beholderP").on("click", function(){
      if( beholderS==false ){

        chiuditutto();


        $("#beholderF").css("height", beholderTen+"px");
        $('html,body').animate({
               scrollTop: $('#beholderP').offset().top},'slow');

               var beholderScroll = 570 + $("#beholderF").offset().top - $(".projects").offset().top;
               $(".beholderI").css({"padding-top": beholderScroll+"px"});

        $("#beholderP").addClass("openLista");

        $(".draw").fadeOut("slow", function() {
              $(".beholderI").fadeIn("slow");
               });

        beholderS = true;
      } else {
        $("#beholderF").css("height", "0px");
        $("#beholderP").removeClass("openLista");

        $(".beholderI").fadeOut("slow", function() {
              $(".draw").fadeIn("slow");
               });

        beholderS = false;
      }
    });


    var tabulaS = false;

    $("#tabulaP").on("click", function(){
      if( tabulaS==false ){

        chiuditutto();


        $("#tabulaF").css("height", tabulaTen+"px");
        $('html,body').animate({
               scrollTop: $('#tabulaP').offset().top},'slow');

               var tabulaScroll = 570 + $("#tabulaF").offset().top - $(".projects").offset().top;
               $(".tabulaI").css({"padding-top": tabulaScroll+"px"});

        $("#tabulaP").addClass("openLista");

        $(".draw").fadeOut("slow", function() {
              $(".tabulaI").fadeIn("slow");
               });

        tabulaS = true;
      } else {
        $("#tabulaF").css("height", "0px");
        $("#tabulaP").removeClass("openLista");

        $(".tabulaI").fadeOut("slow", function() {
              $(".draw").fadeIn("slow");
               });

        tabulaS = false;
      }
    });


        var aimS = false;

        $("#aimP").on("click", function(){
          if( aimS==false ){

            chiuditutto();


            $("#aimF").css("height", aimTen+"px");
            $('html,body').animate({
                   scrollTop: $('#aimP').offset().top},'slow');

                   var aimScroll = 570 + $("#aimF").offset().top - $(".projects").offset().top;
                   $(".aimI").css({"padding-top": aimScroll+"px"});

            $("#aimP").addClass("openLista");

            $(".draw").fadeOut("slow", function() {
                  $(".aimI").fadeIn("slow");
                   });

            aimS = true;
          } else {
            $("#aimF").css("height", "0px");
            $("#aimP").removeClass("openLista");

            $(".aimI").fadeOut("slow", function() {
                  $(".draw").fadeIn("slow");
                   });

            aimS = false;
          }
        });


                var triskelS = false;

                $("#triskelP").on("click", function(){
                  if( triskelS==false ){

                    chiuditutto();


                    $("#triskelF").css("height", triskelTen+"px");
                    $('html,body').animate({
                           scrollTop: $('#triskelP').offset().top},'slow');

                           var triskelScroll = 570 + $("#triskelF").offset().top - $(".projects").offset().top;
                           $(".triskelI").css({"padding-top": triskelScroll+"px"});

                    $("#triskelP").addClass("openLista");

                    $(".draw").fadeOut("slow", function() {
                          $(".triskelI").fadeIn("slow");
                           });

                    triskelS = true;
                  } else {
                    $("#triskelF").css("height", "0px");
                    $("#triskelP").removeClass("openLista");

                    $(".triskelI").fadeOut("slow", function() {
                          $(".draw").fadeIn("slow");
                           });

                    triskelS = false;
                  }
                });


                var dubaiS = false;

                $("#dubaiP").on("click", function(){
                  if( dubaiS==false ){

                    chiuditutto();


                    $("#dubaiF").css("height", dubaiTen+"px");
                    $('html,body').animate({
                           scrollTop: $('#dubaiP').offset().top},'slow');

                           var dubaiScroll = 570 + $("#dubaiF").offset().top - $(".projects").offset().top;
                           $(".dubaiI").css({"padding-top": dubaiScroll+"px"});

                    $("#dubaiP").addClass("openLista");
                    $(".expandable").removeClass("openLista");

                    $(".draw").fadeOut("slow", function() {
                          $(".dubaiI").fadeIn("slow");
                           });

                    dubaiS = true;
                  } else {
                    $("#dubaiF").css("height", "0px");
                    $("#dubaiP").removeClass("openLista");

                    $(".dubaiI").fadeOut("slow", function() {
                          $(".draw").fadeIn("slow");
                           });
                  //  $(".draw").fadeIn("slow");
                    dubaiS = false;
                  }
                });




                var printS = false;

                $("#printP").on("click", function(){
                  if( printS==false ){

                    chiuditutto();

                    $("#printF").css("height", printTen+"px");
                    $('html,body').animate({
                           scrollTop: $('#printP').offset().top},'slow');

                           var printScroll = 570 + $("#printF").offset().top - $(".projects").offset().top;
                           $(".printI").css({"padding-top": printScroll+"px"});

                    $("#printP").addClass("openLista");
                    $(".expandable").removeClass("openLista");

                    $(".draw").fadeOut("slow", function() {
                          $(".printI").fadeIn("slow");
                           });

                    printS = true;
                  } else {
                    $("#printF").css("height", "0px");
                    $("#printP").removeClass("openLista");

                    $(".printI").fadeOut("slow", function() {
                          $(".draw").fadeIn("slow");
                           });
                  //  $(".draw").fadeIn("slow");
                    printS = false;
                  }
                });





                var godspeedS = false;

                $("#godspeedP").on("click", function(){
                  if( godspeedS==false ){

                    chiuditutto();
                    console.log(godspeedTen);

                    $("#godspeedF").css("height", godspeedTen+"px");
                    $('html,body').animate({
                           scrollTop: $('#godspeedP').offset().top},'slow');

                          var godspeedScroll = 570 + $("#godspeedF").offset().top - $(".projects").offset().top;
                           $(".godspeedI").css({"padding-top": godspeedScroll+"px"});

                    $("#godspeedP").addClass("openLista");
                    $(".expandable").removeClass("openLista");

                    $(".draw").fadeOut("slow", function() {
                          $(".godspeedI").fadeIn("slow");
                           });

                    godspeedS = true;
                  } else {
                    $("#godspeedF").css("height", "0px");
                    $("#godspeedP").removeClass("openLista");

                    $(".godspeedI").fadeOut("slow", function() {
                          $(".draw").fadeIn("slow");
                           });
                  //  $(".draw").fadeIn("slow");
                    godspeedS = false;
                  }
                });





function chiuditutto() {
  $(".expandable").css("height", "0px");
  $(".blueShiftI").fadeOut("fast");
  blueShiftS = false;
  $(".firenzeI").fadeOut("fast");
  firenzeS = false;
  $(".spaceI").fadeOut("fast");
  spaceS = false;
  $(".beholderI").fadeOut("fast");
  beholderS = false;
  $(".tabulaI").fadeOut("fast");
  tabulaS = false;
  $(".aimI").fadeOut("fast");
  aimS = false;
  $(".triskelI").fadeOut("fast");
  triskelS = false;
  $(".dubaiI").fadeOut("fast");
  dubaiS = false;
  $(".printI").fadeOut("fast");
  printS = false;
  $(".godspeedI").fadeOut("fast");
  godspeedS = false;
}
