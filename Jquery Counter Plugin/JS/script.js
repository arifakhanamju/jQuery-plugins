// $(document).ready(function () {
// ex-1
//   alert("hello");
// });

// $(document).ready(function () {
//   // ex-2
//   $("button").click(function () {
//     alert("Hello!");
//   });
// });

$(document).ready(function () {
  // // ex-3
  // $("button").on("click", function () {
  //   alert("Hello!");
  // });
  // // ex-4
  // $(".btn").on("click", function () {
  //   alert("Hello World!");
  // });
  // // ex-5
  // $("#btn").on("click", function () {
  //   alert("Hello Arifa!");
  // });
  // // ex - 6
  // $("button").on("dblclick", function () {
  //   alert("Hello Tauhid!");
  // });
  // ex-7
  // $("button").on("mouseover", function () {
  //   alert("Hello Tashreefa!");
  // });
  // ex-8
  $("#btnh").on("click", function () {
    $("#lorem1").hide();
  });
  $("#btns").on("click", function () {
    $("#lorem1").show();
  });
  // ex-9
  $("#btnt").on("click", function () {
    $("#lorem1").toggle();
  });
  // ex-10
  $("p").on("click", function () {
    $(this).hide();
  });
  // ex-11,12
  $("#btnfo").on("click", function () {
    $("#lorem2").fadeOut();
  });
  $("#btnfi").on("click", function () {
    $("#lorem2").fadeIn();
  });
  $("#btnft").on("click", function () {
    $("#lorem2").fadeToggle();
  });
  // Ex-13
  $("p").on("click", function () {
    $(this).slideUP();
  });
  // ex-14, show/hide function using parameter
  $("#btn4").on("click", function () {
    $("#h").hide(1000);
  });
  $("#btn5").on("click", function () {
    $("#h").show(1000);
  });
  // ex-15, fade out/fade in function using parameter
  $("#btn6").on("click", function () {
    $("#h1").fadeOut(2000);
  });
  $("#btn7").on("click", function () {
    $("#h1").fadeIn(1000);
  });
  $("#btn8").on("click", function () {
    $("#h1").fadeToggle(1000);
  });
  // Ex-16
  $("#btn9").on("click", function () {
    $("#h2").fadeOut("fast");
  });
  $("#btn10").on("click", function () {
    $("#h2").fadeIn("slow");
  });
  $("#btn11").on("click", function () {
    $("#h2").fadeToggle("slow");
  });
  // ex-17,using slide Toggle
  $("button").on("click", function () {
    $("p").slideToggle("slow");
  });
  // ex-18, using scroll top
  $("div.demo").scrollTop(300);
});
