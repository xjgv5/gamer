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

        const submenu = (boton, submenu, classname) => {
            boton.addEventListener("click", () => {
                let drop = document.querySelector("." + classname)
                if(!drop){
                    submenu.style.display = "block"
                    submenu.classList.add(classname)
                } else{
                    submenu.style.display = "none"
                    submenu.classList.remove(classname)
                }
                
            })
        }

        // Primer submenu
        let dropdown1_btn = document.querySelector("#icon1")
        let dropdown1_submenu = document.querySelector("#submenu1")
        
        // Segundo submenu
        let dropdown2_btn = document.querySelector("#icon2")
        let dropdown2_submenu = document.querySelector("#submenu2")

        // Ejecutar funcionalidad
        submenu(dropdown1_btn, dropdown1_submenu, "drop1")
        submenu(dropdown2_btn, dropdown2_submenu, "drop2")
    })
})