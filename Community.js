var slideIndex = 1;
showSlides(slideIndex);


var slideInterval = setInterval(function() {
    plusSlides(1);
}, 10000); 


function plusSlides(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex += n);
    slideInterval = setInterval(function() {
        plusSlides(1);
    }, 10000);
}

function currentSlide(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex = n);
    slideInterval = setInterval(function() {
        plusSlides(1);
    }, 10000);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex - 1].className += " active";
}

function showIconBar(){
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:block;");
    navigation.classList.add("hide");
}

//Comment
function showComment(){
    var commentArea = document.getElementById("comment-area");
    commentArea.classList.remove("hide");
}

//Reply
function showReply(){
    var replyArea = document.getElementById("reply-area");
    replyArea.classList.remove("hide");
}
