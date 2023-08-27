window.addEventListener("load", () => {
    "use strict"
    const burger = document.querySelector(".burger")
    const sitenav = document.querySelector(".sitenav")
    const burgerImage = document.querySelector(".burger-image")
    const herotext = document.querySelector(".hero-text")
    let text =  "Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan thats right for you. Ensure you and your loved ones are protected."
    const handleClick = () => {
        sitenav.classList.toggle("active")
        if(sitenav.getAttribute("class").includes("active")){
            burgerImage.src = "./assets/images/X.png"
        }else{
            burgerImage.src = "./assets/images/Burger.png"
        }
    }
    burger.addEventListener("click", handleClick)   
    window.addEventListener("scroll" , () => {
        console.log(window.scrollY)
        if(window.matchMedia("(max-width: 500px")  && window.scrollY > 0 && window.scrollY < 200){
            if(text.split(" ").length > 20){
                herotext.innerHTML = `${text.split(" ").slice(0, 10).join(" ")}  <span class="text-to"> ... </span> `
            }
        }else{
            return false
        }
    })
    const handleClickWindow = (event) => {
        if(event.target.matches(".text-to")){
            herotext.textContent = text
        }
    }
    window.addEventListener("click", handleClickWindow)
})