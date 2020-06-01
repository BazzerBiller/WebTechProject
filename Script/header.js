$(document).ready(function(){
    $('.header').hover(function(){
        $(this).css("background", "skyblue");
        $(this).css("transition", "500ms");
    },function(){
      $(this).css("background", "grey");
    })
})