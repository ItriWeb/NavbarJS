 const menuDrop = document.querySelector('.menudrop');
 const navbarlinks = document.querySelector('.navbar-links');




menuDrop.addEventListener("click", function(){
    

    
    if (navbarlinks.classList.contains("menuappear")) {
        
        navbarlinks.classList.remove("menuappear");
    } else{
         navbarlinks.classList.add("menuappear");
    }
    
   
})
