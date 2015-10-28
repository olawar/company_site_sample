

var Application = function(){
    function init(){
        console.log("init");
    }
    function scrollPage(){
        console.log("scrolling");
    }
    function scrollingMenuFeatures(){

        var menu = $("nav.sticky-nav");
        var lastPositionTop = 0;
        var sections = $("section");
        var links = $(".activity");

        $(window).on("scroll", function(){
            if(menu.hasClass("sticky") === false && $(this).scrollTop() > menu.offset().top){
                lastPositionTop = menu.offset().top;
                menu.addClass("sticky");
            }
            if(menu.hasClass("sticky") && $(this).scrollTop() < lastPositionTop){
                menu.removeClass("sticky");
            }

            sections.each(function(index){
                if(index + 1 >= sections.length){
                    if( sections.eq(index).offset().top < $(window).scrollTop()){
                        links.eq(index).addClass("active");
                    }
                    else {
                        links.eq(index).removeClass("active");
                    }
                }
                else {
                    if( sections.eq(index).offset().top < $(window).scrollTop() &&  sections.eq(index + 1).offset().top > $(window).scrollTop()){
                        links.eq(index).addClass("active");
                    }
                    else {
                        links.eq(index).removeClass("active");
                    }
                }
            });
        });
    }

    return{
        init:init,
        scrollPage:scrollPage,
        scrollingMenuFeatures:scrollingMenuFeatures
    }
};


$(function(){

    var app = new Application();
    app.init();
    app.scrollPage();
    app.scrollingMenuFeatures();

});