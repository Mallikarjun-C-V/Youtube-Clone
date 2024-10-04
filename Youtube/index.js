var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
var like1 = document.querySelector(".like1");
var like2 = document.querySelector(".like2");
var light = document.querySelector(".light");
var header = document.querySelector(".header");
var sideVideo = document.querySelector(".side-video");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
    header.classList.toggle("dark1");
}

like1.onclick = function(){
    like1.classList.toggle("liked");
}

like2.onclick = function(){
    like2.classList.toggle("liked1");
}

light.onclick = function(){
    header.classList.toggle("dark1")
}

sideVideo.onclick = function(){
    sideVideo.classList.toggle("S1")
}



