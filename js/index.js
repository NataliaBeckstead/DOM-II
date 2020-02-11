//1st eventListener
document.addEventListener('keydown',  (event) => {
    if (event.key === 'a') {
      document.body.style = "color: white; background-color: black";
      const logo = document.querySelector(".logo-heading");
      logo.style.color = "black";
    }
  });
document.addEventListener('keydown',  (event) => {
    if (event.key === 's') {
      document.body.style = "color: black; background-color: white";
    }
});

//2nd eventListener
document.querySelectorAll("img").forEach(el => {
    el.addEventListener("mouseenter", () => {
        el.style.transform = "scale(1.2)";
        el.style.transition = "transform 1s";
    })
});

//3rd eventListener
document.querySelectorAll("img").forEach(el => {
    el.addEventListener("mouseleave", () => {
        el.style.transform = "scale(1)";
        el.style.transition = "transform 1s";
    })
});

//4th eventListener
document.querySelectorAll(".btn").forEach(el => {
    el.addEventListener("click", () => {
        alert("Hello\nHow are you?");
    })
});

//5th eventListener
const logo = document.querySelector(".logo-heading")
logo.addEventListener("dblclick", () => {
    alert("Yeah\nIt's not working");
});

document.addEventListener("dblclick", () => {
    logo.style.color = "blue";
});

//6th eventListener
document.querySelectorAll("h2").forEach(el => {
    window.addEventListener("scroll", () => {
        el.style.color = "red";
    })
});

//7th eventListener
window.addEventListener('resize', () => {
    document.body.style = "background-color: #ffffa3";
});

//8th eventListener
document.addEventListener("mousemove", () => {
    logo.style.color = "#ffa724";
});

//9th eventListener
document.querySelectorAll("p").forEach(el => {
    el.addEventListener("mouseup", () => {
        el.style.color = "blue";
    })
});

//10th eventListener
document.querySelectorAll("a").forEach(el => {
    el.addEventListener("focus", () => {
        el.style.transform = "scale(1.2)";
        el.style.color = "#ffa724";
    })
});

//11th eventListener
document.querySelectorAll("a").forEach(el => {
    el.addEventListener("blur", () => {
        el.style.transform = "scale(1)";
        el.style.color = "black";
    })
});

//stop propagation
const home = document.querySelector(".home");
home.addEventListener('click', () => {
  home.style.backgroundColor= "#fdff99";
  event.stopPropagation();
});

const sign = document.querySelector(".content-pick");
sign.addEventListener('click', (event) => {
  sign.style.backgroundColor="#ffa724";
  event.stopPropagation();
});

//prevent defolt on links
const stopLink = document.querySelectorAll("a");
stopLink.addEventListener("click", (event) => {
    event.preventDefault();
});