

var Application = function(){
    function scrollButton(){

        //function for scrolling to down by clicking the arrow button

        $("svg.arrow-down").on("click", function(){
            var arrowPosition = $(window).scrollTop();
            $('html, body').animate({scrollTop:  arrowPosition + $(window).height() }, 800);
        });
    }

    function mobileMenu() {

        //mobile hamburger sticky menu

        var mobileMenuLinks = $("a.menu-links");
        var menuItems = $("p.nav-item");
        var navigationDropdown = $("div.nav-dropdown");

        if(window.matchMedia("(max-width: 800px)").matches){
            $(".desktop-button").addClass("smartphone-button").removeClass("desktop-button");
            $("nav").removeClass("sticky-nav");
            navigationDropdown.removeClass("nav-flex").addClass("smartphone-view").addClass("click-class");
            menuItems.removeClass("nav-item");
            $("button").on("click", function(){
                navigationDropdown.toggleClass("click-class");
            });

            mobileMenuLinks.on("click", function (){
                navigationDropdown.toggleClass("click-class");
            });

        }
    }


    function sliderThree() {

        var images = $(".team-slider li");
        var visibleImage=0;
        var arrowRight = $("#arrow-right");
        var arrowLeft = $("#arrow-left");

        //version for smartphones showing one person at a time

        if(window.matchMedia("(max-width: 1000px)").matches){
            images.addClass("no-display");
            images.eq(visibleImage).show();
            arrowLeft.removeClass("no-display");

            arrowRight.click(function(){
                images.eq(visibleImage).hide();
                visibleImage++;
                if(visibleImage >= images.length){
                    visibleImage=0;
                }
                images.eq(visibleImage).show();
            });

            arrowLeft.click(function(){
                images.eq(visibleImage).hide();
                visibleImage--;
                if(visibleImage < 0){
                    visibleImage=images.length-1;
                }
                images.eq(visibleImage).show();
            });
        }

        else {
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

        if(window.matchMedia("(max-width: 800px)").matches) {

            //sticky menu for mobile devices

            $("#navigation-container").prependTo(".company-page");
            var menuMobile = $(".menu-button");

            $(window).on("scroll", function () {
                if (menuMobile.hasClass("sticky") === false && $(this).scrollTop() > menuMobile.offset().top) {
                    lastPositionTop = menuMobile.offset().top;
                    menuMobile.addClass("sticky");
                }
                if (menuMobile.hasClass("sticky") && $(this).scrollTop() < lastPositionTop) {
                    menuMobile.removeClass("sticky");
                }
            });
        }

        else {

            //sticky menu for desktops
            $(window).on("scroll", function(){

                if(menu.hasClass("sticky") === false && $(this).scrollTop() > menu.offset().top){
                    lastPositionTop = menu.offset().top;
                    menu.addClass("sticky");
                }
                if(menu.hasClass("sticky") && $(this).scrollTop() < lastPositionTop){
                    menu.removeClass("sticky");
                }


                //focusing on currently viewed section

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

    }

    return{
        scrollButton:scrollButton,
        mobileMenu:mobileMenu,
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
    app.mobileMenu();
    app.sliderThree();
    app.bxSlider();
    app.portfolioHover();
    app.morePortfolio();
    app.scrollingMenuFeatures();


});