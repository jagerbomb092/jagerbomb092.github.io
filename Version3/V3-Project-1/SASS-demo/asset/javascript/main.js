

let show = ()=>{
    const btn = document.querySelector(".header__top-btn");
    const menu = document.querySelector(".header__top-list");
    btn.addEventListener("click",()=>{
        menu.classList.toggle("show")
    })
}
show()
window.addEventListener("scroll",()=>{
    const header = document.querySelector(".header__top");
    const scrolling = header.getBoundingClientRect().top;
    if(scrollY>scrolling+150){
        header.classList.add("scroll")
        
    }
    else{
        header.classList.remove("scroll")
    }
})
const menu = document.querySelector(".header__top-list");
let list =document.querySelectorAll(".list__item-link")
list.forEach(function(item){
    item.addEventListener("click",()=>{
        menu.classList.remove("show")
    })
})
let section = document.querySelectorAll(".section")
let scrollMenu = () =>{
    for (let i = 0; i < list.length; i++) {
       let lists = list[i];
       let offsetTop = section[i].offsetTop
        lists.addEventListener("click",(e)=>{
            e.preventDefault();
            window.scrollTo(0,offsetTop-67)
            menu.classList.remove("show")
        })
        if(scrollY > offsetTop - 69){
            list.forEach(lists =>{
                lists.classList.remove("color-active")
            })
            lists.classList.add("color-active")
            
        }
        else{
            lists.classList.remove("color-active")
            
        }
    }
}
window.addEventListener("scroll",scrollMenu)
let modalInfo =[{
    name: "LOG CABIN",
    src : "asset/image/cabin.png"
},
{
    name : "TASTY CAKE",
    src :"asset/image/cake.png"
},
{
    name : "CIRCUS TENT",
    src : "asset/image/circus.png"
},
{
    name: "CONTROLLER",
    src: "asset/image/cake.png"
},
{
    name: "LOCKED SAFE",
    src:"asset/image/safe.png"
},
{
    name: "SUBMARINE",
    src:"asset/image/submarine.png"
}
]
// console.log(modalInfo[i].name); 
let modal = document.querySelectorAll(".item")
let modalBtn = document.querySelectorAll(".overlay")
let closeBtn = document.querySelector(".btn-close")
let closeWd = document.querySelector(".close-window")
let modalContent = document.querySelector(".portfolio-modal__content")
let modalBlock = document.querySelector(".portfolio-modal")
let body = document.body

function showModal(){
    for (let i = 0; i < modalBtn.length; i++) {
        let modals = modalBtn[i];
        modals.addEventListener("click",() =>{
            let modalTable = document.querySelector(".portfolio-modal");
            let nameModal = document.querySelector(".modal-title");
            modalTable.classList.add("show");
            modalContent.classList.add("show-content")
            nameModal.innerText = modalInfo[i].name
            document.querySelector('.modal-img').src= modalInfo[i].src
            body.classList.add("body-hidden")
        })
    }
}
closeBtn.addEventListener("click",()=>{
    let modalTable = document.querySelector(".portfolio-modal");
    modalTable.classList.remove("show");
    modalContent.classList.remove("show-content")
    body.classList.remove("body-hidden")
})
closeWd.addEventListener("click",()=>{
    let modalTable = document.querySelector(".portfolio-modal");
    modalTable.classList.remove("show");
    modalContent.classList.remove("show-content")
    body.classList.remove("body-hidden")
})
modalBlock.addEventListener("click",()=>{
    let modalTable = document.querySelector(".portfolio-modal");
    modalTable.classList.remove("show");
    modalContent.classList.remove("show-content")
    body.classList.remove("body-hidden")
})
showModal()

let arrow=document.querySelector(".ar-up")
let banner=document.querySelector(".portfolio")
arrowActv = () =>{
    let position = banner.offsetTop
    if (scrollY>position){
        arrow.classList.add("active")
    }
    else{
        arrow.classList.remove("active")
    }
}
window.addEventListener("scroll",arrowActv)
let input = document.querySelectorAll(".input")
let warning =document.querySelectorAll(".warning")
let sendBtn = document.querySelector(".contact-send__btn")
let inputWn = () =>{
    for (let i = 0; i < input.length; i++) {
        let inputs = input[i]
        sendBtn.addEventListener("click",()=>{
            if(inputs.value === ""){
                warning[i].classList.add("warning-active")
                
            }
            else{
                warning[i].classList.remove("warning-active")
            }  
        })
    }
}
inputWn()