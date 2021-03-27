window.addEventListener("load", function(){

var menuBtn = document.getElementById("menu-btn")
var navList= document.getElementById("nav-list")

menuBtn.addEventListener("click", toggleNav)

function toggleNav(){
  menuBtn.classList.toggle("active")
  navList.classList.toggle("in-active")
}

window.addEventListener("scroll", function(){
  if(window.scrollY>40){
      if(menuBtn.classList.contains("active")){
        menuBtn.classList.remove("active")
        navList.classList.add("in-active")
      }
      else{
        return
      }
  }  
})

})