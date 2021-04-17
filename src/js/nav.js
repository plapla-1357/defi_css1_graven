const burger = document.querySelector(".burger")
const nav = document.querySelector("nav")

burger.addEventListener("click" , () => {
  console.log("clicked")
  nav.classList.toggle("active")
  
})