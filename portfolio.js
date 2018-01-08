//$(window).on("load", start);

var width = 600;
var widthLille = 400;
var animationSpeed = 1800;
var pause = 4000;
var currentSlide = 1;

var $slider = $("#preview-menu");
var $slideContainer = $slider.find(".preview-slides");
var $slides = $slideContainer.find(".slide");

var $tekst = $("#preview-tekst");

var mq = window.matchMedia('all and (max-width: 600px)');


setInterval(function () {

    if (mq.matches) {
        sliderSliderLille();
    } else {
        sliderSlider();
    }


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


/** MEDIA QUIERY **/

function sliderSliderLille() {
    console.log("sliderSliderLille");
    console.log("animationspeed er " + animationSpeed);
    console.log("pause er" + pause)
    $($slideContainer).animate({
        "margin-left": "-=" + widthLille
    }, animationSpeed, reset);
}
