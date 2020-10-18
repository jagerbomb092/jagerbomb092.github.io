let St = true
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
            if (St==true) {
                header.classList.add("watch");
                header.classList.add("un-hide")
                return St = false
            }
            else{
                header.classList.remove("watch");
                header.classList.remove("un-hide")
                return St = true
            }
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
let position = bannerHeight.offsetTop
window.addEventListener("scroll",()=>{
    var scrollPoint = window.pageYOffset;
    var header = document.querySelector(".header");
    if (scrollPoint>position -300) {
        if (scrollPoint > startPoint ) {
            header.classList.add("hide")
            
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
let number = document.querySelectorAll(".number")

let couterSection = ()=>{
    height = section[2].offsetTop
    console.log(height);
    if(scrollY>height - 300){
        let couter =()=>{
            for (let i = 0; i < number.length; i++) {
                let numbers = number[i];
                let last = numbers.getAttribute('data-target')
                let status = parseInt(numbers.innerText)
                let up = 1
                if (status<last) {
                    status = parseInt(status + up)
                    setTimeout(couter,80)
                    numbers.innerHTML = status+""+"%"
                }
            }
        }
        couter ()
    }
}
window.addEventListener("scroll",couterSection)