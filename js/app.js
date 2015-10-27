$(function(){

var Application = function(){
        function init(){
            console.log("init");
        }
        function scrollPage(){
            console.log("scrolling");
        }
        return{
            init:init,
            scrollPage:scrollPage
        }
    };

    var app = new Application();
    app.init();
    app.scrollPage();


    var menu = $("nav.sticky-nav");
    var lastPositionTop = 0;
    var menuHeight = menu.height();
    var paragraphs = $("p");
    var links = $(".nav a");

    $(window).on("scroll", function(){
        if(menu.hasClass("sticky") === false && $(this).scrollTop() > menu.offset().top){
            lastPositionTop = menu.offset().top;
            menu.addClass("sticky");
        }
        if(menu.hasClass("sticky") && $(this).scrollTop() < lastPositionTop){
            menu.removeClass("sticky");
        }
    });

});