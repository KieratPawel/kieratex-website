$(".btn1").on("click", function(){
    $("html, body").animate({scrollTop:$(".projects").offset().top+$(window).height()/5},1000)
    window.setTimeout($("html, body").animate({scrollTop:$(".projects").offset().top},500),1000)
})