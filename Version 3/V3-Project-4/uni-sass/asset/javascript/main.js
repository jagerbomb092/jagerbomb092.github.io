var menu = {
    init:function(){
        this.show();
    },
    show:function() {
        var header = document.querySelector(".header");
        var btn= document.querySelector(".header-top__btn");
        var menu=document.querySelector(".header-top__menu");
        btn.addEventListener("click",()=>{
            menu.classList.toggle("show");
            header.classList.toggle("watch");
        })
    }
}
menu.init()


window.onscroll =function(){scrollMenu()};
function scrollMenu(){
    var header = document.querySelector(".header");
    var scrolling = header.getBoundingClientRect().top
    if(scrollY>scrolling+50){
        header.classList.add("bg")
    }
    else{
        header.classList.remove("bg")
    }
}
let bannerHeight = document.querySelector(".about")
var startPoint = window.pageYOffset;
position = bannerHeight.offsetTop
window.addEventListener("scroll",()=>{
    var scrollPoint = window.pageYOffset;
    var header = document.querySelector(".header");
    if (scrollPoint>position -300) {
        if (scrollPoint > startPoint ) {
            header.classList.add("hide")
            console.log(startPoint);
        } 
        else {
            header.classList.remove("hide")
        }
    }
    startPoint = scrollPoint 
})
let banner=document.querySelector(".banner")
let section = document.querySelectorAll(".section")
let aniActive = ()=>{
    for (let i = 0; i < section.length; i++) {
        let sections = section[i];
        let positions = sections.offsetTop
        if (scrollY>positions-300) {
            sections.classList.add("animation-active")
        }
    }
}
window.addEventListener ("scroll",aniActive)
let addAnimation = ()=>{
    let title=document.querySelector(".banner-item")
    title.classList.add('animation')
    let img = document.querySelector(".banner-img")
    img.classList.add('animation')
}
addAnimation()