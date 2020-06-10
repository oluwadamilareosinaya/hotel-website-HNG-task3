var hamburger = document.getElementById('hamburger');
var mobileNav = document.getElementById('mobile-nav');
var bookNowBtn = document.getElementById('book-now__btn');
var hamburgerStick = document.getElementById('hamburger__stick');
var mobileLis = document.getElementsByClassName('mobile-li');

hamburger.addEventListener('click', function(){
    mobileNav.classList.toggle('open');
    bookNowBtn.classList.toggle('open');
    hamburgerStick.classList.toggle('open');

    for(var i = 0; i<mobileLis.length; i++){
        mobileLis[i].classList.toggle('open');
    }
});