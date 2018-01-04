//$(window).on("load", start);

var width = 550;
var animationSpeed = 1500;
var pause = 4000;
var currentSlide = 1;

var $slider = $("#preview-menu");
var $slideContainer = $slider.find(".preview-slides");
var $slides = $slideContainer.find(".slide");


setInterval(function () {
    sliderSlider();
}, pause);


function sliderSlider() {
    console.log("sliderSlider");
    console.log("animationspeed er " + animationSpeed);
    console.log("pause er" + pause)
    $($slideContainer).animate({
        "margin-left": "-=" + width
    }, animationSpeed, reset);

}


function reset() {

    currentSlide++;
    if (currentSlide === $slides.length) {
        console.log("currentSlide = length");
        currentSlide = 1;
        $slideContainer.css({
            "margin-left": "0"
        });
    }
}

//SetInterval
//animate margin left
// IF: last slide - go to pos 1
// listen for mouseenter and pause
// resume på mouseleave



//$(window).on("load", sidenErLoadet);
//
//
//function sidenErLoadet() {
//    console.log("Velkommen til Mathilde Oldorfs portfolio");




// FORSØG PÅ EKSTRA OVERLAY TIL HOVER-FUNKTIONEN I PROJEKT-HTML

//    $(".overlay").hover(overlayHidden);


//function overlayHover() {
//    console.log("Overlay hover er aktiv");
//    $(".overlay").hover(overlayHidden);
//}
//
//
//function overlayHidden() {
//    console.log("Overlay bliver usynligt");
//    $(".overlay").css("display", "none");
//}
//
////function overlaySynligt() {
////    console.log("Overlay er synligt igen");
////    $(".overlay").css("display", "inherit");
////}
