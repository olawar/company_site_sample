/**
 * Created by Awar on 2015-10-22.
 */
//$(function(){

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




//});