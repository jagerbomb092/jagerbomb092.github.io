var menu = {
    init:function(){
        this.show();
    },
    show:function(){
        var btn = document.querySelector(".header-btn");
        var icon = document.querySelector(".header-menu__icon")
        var menu = document.querySelector(".header-menu");
        btn.addEventListener("click",()=>{
            menu.classList.toggle("show");
            icon.classList.toggle("show");
            menuCenter.classList.remove('hide')
            menuCenter.classList.add("show")
        })
        
    }
}
menu.init();
let startPoint = window.pageYOffset;

let menuCenter =document.querySelector(".header")
let onScroll = ()=>{
   let scrolling = menuCenter.getBoundingClientRect().top
   if (scrollY>scrolling+100) {
       menuCenter.classList.add("show")
   } else {
    menuCenter.classList.remove("show")
   }

   let scrollPoint = window.pageYOffset
   if (startPoint>scrollPoint) {
        menuCenter.classList.remove('hide')
   } else {
        menuCenter.classList.add('hide')
   }
   startPoint=scrollPoint;
}
window.onscroll =function(){onScroll()}
