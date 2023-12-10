const humbargerTabs = document.querySelector(".humbargerTabs")
const humbargerMenu = document.querySelector(".humbargerMenu")
const line1 = document.querySelector(".line1")
const line2 = document.querySelector(".line2")
const line3 = document.querySelector(".line3")
const overlaymenu = document.querySelector(".overlaymenu")


humbargerMenu.addEventListener("click",()=>{

  if(humbargerMenu.classList.contains("selected")){
  line2.classList.remove("opacity0")
  line1.classList.remove("rotate45degPlus")
  line3.classList.remove("rotate45degMinus")
  humbargerMenu.classList.remove("selected")
  overlaymenu.classList.remove("showoverlay")
  }
  else{
  line2.classList.add("opacity0")
  line1.classList.add("rotate45degPlus")
  line3.classList.add("rotate45degMinus")
  humbargerMenu.classList.add("selected")
  overlaymenu.classList.add("showoverlay")
  }
  
})