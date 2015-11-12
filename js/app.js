

var Application = function(){
    function scrollButton(){

        //function for scrolling to down by clicking the arrow button

        $("svg.arrow-down").on("click", function(){
            console.log("arrw");
            var arrowPosition = $(window).scrollTop();
            $('html, body').animate({scrollTop:  arrowPosition + $(window).height() }, 800);
        });
    }
    function sliderThree() {

        var images = $(".team-slider li");
        var visibleImage=0;
        var arrowRight = $("#arrow-right");
        var arrowLeft = $("#arrow-left");

        //displaying the first three elements

        for(visibleImage = 0; visibleImage <=2; visibleImage++) {
            images.eq(visibleImage).show();
        }

        visibleImage=0;

        //function for sliding images of team members, showing 3 people at a time

        arrowRight.click(function(){
            console.log("klikam");
            arrowLeft.removeClass("no-display");
            images.eq(visibleImage).hide();
            visibleImage++;
            if((visibleImage+2) >= (images.length)){
                arrowRight.addClass("no-display");
            }
            console.log(visibleImage);
            images.eq(visibleImage+2).show(200);
        });

        arrowLeft.click(function(){
            arrowRight.removeClass("no-display");
            images.eq(visibleImage+2).hide();
            visibleImage--;
            if(visibleImage == 0){
                arrowLeft.addClass("no-display");
            }
            images.eq(visibleImage).show(200);
        });
    }
    function bxSlider() {
        //slider for testimonials
        $('.bxslider').bxSlider();
    }
    function portfolioHover() {

        //putting focus on selected portfolio elements

        var itemsToHover = $(".portfolio-item");
        var hoveringItems = $("img.hover-layer");

        itemsToHover.on("mouseenter", function(){
            $(this).find(hoveringItems).addClass("hover-enter").removeClass("hover-layer");
        });

        itemsToHover.on("mouseleave", function(){
            $(this).find(hoveringItems).removeClass("hover-enter").addClass("hover-layer");
        });
    }
    function morePortfolio() {

        //displaying more items in portfolio

        $(".portfolio-button").on("click", function(){
            $(".no-display").removeClass("no-display");
        });

        $(".portfolio-less-button").on("click", function(){
            $("div.portfolio-item:nth-child(n+7)").addClass("no-display");
            $(".portfolio-less-button").addClass("no-display");
        });
    }

    function scrollingMenuFeatures(){

        //sticky menu function

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

        //focusing currently viewed section

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
        scrollButton:scrollButton,
        sliderThree:sliderThree,
        bxSlider:bxSlider,
        portfolioHover:portfolioHover,
        morePortfolio:morePortfolio,
        scrollingMenuFeatures:scrollingMenuFeatures
    }
};


$(function(){

    var app = new Application();
    app.scrollButton();
    app.sliderThree();
    app.bxSlider();
    app.portfolioHover();
    app.morePortfolio();
    app.scrollingMenuFeatures();


});