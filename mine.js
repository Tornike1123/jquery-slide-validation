$(document).ready(function () {
  $(".btn").click(function () {
    $(".validation").toggle();
    $(".btn").hide();

    
  });

  $(".go").click(function () {
    $(".btn").show();
    $(".validation").hide();

  });
});

