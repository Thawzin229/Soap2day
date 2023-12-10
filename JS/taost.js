const parent = document.querySelector(".parent")
const  cards = document.querySelectorAll(".card")
const nav_icon = document.querySelector(".nav_icon")



nav_icon.addEventListener("click" , (event)=>{
  parent.innerHTML = ""
  const cardId = event.target.id
  const toast =  document.createElement("div")
  const text= `Copied page's link`
  toast.classList.add("toastalert")

  toast.append(text)
  
  parent.append(toast)


  toast.style.left  = `-${toast.offsetWidth}px`
  setTimeout(() => {
    toast.style.left = `0px`
    
  }, 100);
  setTimeout(() => {
    toast.style.left  = `-${toast.offsetWidth}px`

    
  }, 4000);
})

