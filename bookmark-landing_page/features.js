const tabNav = document.querySelector(".features__nav");
const tabNavList = document.querySelectorAll(".features__nav li");
const tabList = document.querySelectorAll(".tab__content");

tabNavList.forEach((item, index, array) => {
    item.addEventListener("click", () => {
      tabNav.querySelector(".active").classList.remove("active"); //removes active
      item.classList.add("active"); //adds active to that one thats clicked
  
      if (item.classList.contains("one")) {
        tabList[0].classList.add("active");
        tabList[2].classList.remove("active");
        tabList[1].classList.remove("active");
      }
  
      if (item.classList.contains("two")) {
        tabList[1].classList.add("active");
        tabList[0].classList.remove("active");
        tabList[2].classList.remove("active");
      }
  
      if (item.classList.contains("three")) {
        tabList[2].classList.add("active");
        tabList[1].classList.remove("active");
        tabList[0].classList.remove("active");
      }
    });
  });