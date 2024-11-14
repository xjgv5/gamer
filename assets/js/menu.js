document.addEventListener("DOMContentLoaded", (event) => {
    let mobile__btn = document.querySelector(".navbar__mobile-btn")
    let mobile__menu = document.querySelector(".navbar__mobile-list")

    mobile__btn.addEventListener("click", ()=> {
        let menu__open = document.querySelector(".menu__open")

        if(!menu__open){
            mobile__menu.style.display = "block"
            mobile__menu.style.visibility = "visible"
            mobile__menu.classList.add("menu__open")
        } else{
            mobile__menu.style.display = "none"
            mobile__menu.classList.remove("menu__open")
        }
    })
})