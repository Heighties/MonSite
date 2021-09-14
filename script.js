

$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
    $(window).on('scroll load', function(){
       
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if($(window).scrollTop() > 0){
            $('.sctop').show();
        }
        else{
            $('.sctop').hide();

        }

    });

   

    //smooth scrolling

    $('a[href*="#"]').on('click',function(e){

        e.preventDefault();

        $('html, body').animate({

            scrollTop : $($(this).attr('href')).offset().top,

        },
        500,
        'linear'
        
        );


    });

}); 


//reveal


const ratio = .1
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio){
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('[class*="reveal-"]').forEach(function(r){
    observer.observe(r)
})


//typeWriter


var txtAnim = document.querySelector('h4');

new Typewriter(txtAnim, {
    deleteSpeed: 50,
    loop : true
})
.changeDelay(200)
.typeString('Je suis')
.pauseFor(300)
.changeDelay(100)
.typeString('<span style="color :var(--skin-color)">\ curieux</span>')
.pauseFor(1000)
.deleteChars(7)
.typeString('<span style="color :var(--skin-color)"> \ créatif</span>')
.pauseFor(1000)
.deleteChars(7)
.typeString('<span style="color :var(--skin-color)"> \ ambitieux</span>')
.pauseFor(1000)
.deleteChars(9)
.typeString('<span style="color :var(--skin-color)">\ passionné</span>')
.pauseFor(2000)
.start()

var txtAnim = document.querySelector('h1');

new Typewriter(txtAnim, {
    deleteSpeed: 50,
})
.changeDelay(100)
.typeString('<span style="color : #eee">Je m\'appelle</span> Geoffrey')
.start()



//toggle style switcher

const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click", () =>{
    document.querySelector(".style-switcher").classList.toggle("open");
})


//theme colors

const alternateStyles = document.querySelectorAll('.alternate-style');

function setActiveStyle(color){
    alternateStyles.forEach((style) =>{
        if(color === style.getAttribute('title')){
            style.removeAttribute('disabled');
        }
        else{
            style.setAttribute('disabled', 'true');
        }
    })
}

//theme light and dark mode

const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () =>{
    dayNight.querySelector("i").classList.toggle("fa-moon-o");
    dayNight.querySelector("i").classList.toggle("fa-sun-o");
    document.body.classList.toggle("light");
})

window.addEventListener("load", () =>{
    if(document.body.classList.contains("light")){
        dayNight.querySelector("i").classList.add("fa-moon-o");
    }
    else{
        dayNight.querySelector("i").classList.add("fa-sun-o");
    }

    
})

