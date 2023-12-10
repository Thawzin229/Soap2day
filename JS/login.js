// const tabMenu = document.querySelector(".tabWrapper")
// const icons = document.querySelectorAll(".icon")
// const tabs = document.querySelectorAll(".tabs")
// let isDragging = false
// const dragging = (event)=>{
// if(isDragging){
//   tabMenu.scrollLeft -= event.movementX
// }
// }


// icons.forEach((i)=>{
// i.addEventListener("click" , ()=>{
// tabMenu.scrollLeft += i.id === "left" ? -350 : 350

// })
// })

// tabs.forEach((tab)=>{
// tab.addEventListener("click" ,()=>{
//   tabMenu.querySelector(".active").classList.remove("active")
//   tab.classList.add("active")
// })

// })




// tabMenu.addEventListener("mousemove" , dragging)
// tabMenu.addEventListener("mousedown" , ()=>{
//   isDragging = true

// })
// tabMenu.addEventListener("mouseup" , ()=>{
//   isDragging = false

// })


const login = document.querySelector(".login")
const parent = document.querySelector(".parent")

const handlingToast = ()=>{
  parent.innerHTML =""
  const toast  = document.createElement("div")
  toast.classList.add("notification")
  toast.append("Thank You For Login")
  parent.append(toast)

  toast.style.bottom = `-${toast.offsetHeight}px`
  
  setTimeout(() => {
    
    toast.style.bottom = `0px`
  }, 100);


  setTimeout(() => {
  toast.style.bottom = `-${toast.offsetHeight}px`
    
  }, 2000);

}

login.addEventListener("click" , handlingToast)