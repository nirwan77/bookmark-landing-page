{
    const mainNav=document.querySelector(".nav__main");
    const navOpen=document.querySelector(".nav__open");
    const sidebar=document.querySelector(".nav__items");
    const navClose=document.querySelector(".nav__close");

    navOpen.addEventListener("click", () =>{
        sidebar.classList.toggle("nav__items--active");
        mainNav.classList.toggle("nav__main--active");
        navOpen.classList.toggle("hidden");
        
    })

    navClose.addEventListener("click", () =>{
        sidebar.classList.toggle("nav__items--active");
        mainNav.classList.toggle("nav__main--active");
        navOpen.classList.toggle("hidden");
        
    })
  }