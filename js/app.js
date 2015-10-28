

var Application = function(){
    function init(){
        console.log("init");
    }
    function scrollPage(){
        console.log("scrolling");
    }
    function scrollButton(){
        $("svg.arrow-down").on("click", function(){
            $('html, body').animate({scrollTop: ($(".sticky-nav").offset().top)}, 800);
        });
    }
    function bxSlider() {
        $('.bxslider').bxSlider();
    }
    function portfolioHover() {

        var itemsToHover = $(".portfolio-item");
        var hoveringItems = $("img.hover-layer");

        itemsToHover.on("mouseenter", function(){
            $(this).find(hoveringItems).addClass("hover-enter").removeClass("hover-layer");
        });

        itemsToHover.on("mouseleave", function(){
            $(this).find(hoveringItems).removeClass("hover-enter").addClass("hover-layer");
        });
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
        scrollButton:scrollButton,
        bxSlider:bxSlider,
        portfolioHover:portfolioHover,
        scrollingMenuFeatures:scrollingMenuFeatures
    }
};


$(function(){

    var app = new Application();
    app.init();
    app.scrollPage();
    app.scrollButton();
    app.bxSlider();
    app.portfolioHover();
    app.scrollingMenuFeatures();





});