const slider = document.querySelector(".slider")
const tabs = ["android-app"  ,"tv-shows" , "country" , "movie" ,"genre" ,"home"]
const ulEl = document.getElementById("ullist")

const handleSliderbar = (event)=>{
const  listId = event.target.id
const listDiv = document.getElementById(listId)
const listWidth = listDiv.offsetWidth
const listDistance = listDiv.offsetLeft

slider.style.width = listWidth  + "px"
slider.style.transform = `translateX(${listDistance}px)`

ulEl.querySelector(".color").classList.remove("color")
listDiv.classList.add("color")
}


for (let i = 0; i < tabs.length; i++) {
  
  const list = document.createElement("a");
  
  list.id = i ;
  list.prepend(tabs[i].toUpperCase())
  
  list.classList.add("list")
  if(i === 0){
    list.href = "#android-app"
    list.title = "android-app"
  }
  if(i === 1){
    list.href = "#tv-shows"
    list.title = "tv-shows"
  }
  if(i === 2){
    list.href = "#country"
    list.title = "country"
  }
  if(i === 3){
    list.href = "#movie"
    list.title = "movie"
  }
  if(i === 4){
    list.href = "#genre"
    list.title = "genre"

  }
   if(i === 5){
    list.href = "#home"
    list.title = "home"

  }
  ulEl.prepend(list)
  if(i === 5 ){
    slider.style.width = list.offsetWidth + "px"
    list.classList.add("color")
  }

  list.addEventListener("click", handleSliderbar)
  
}
