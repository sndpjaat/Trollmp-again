// --------------------------------------- navbar -------------------------------------//

const item = document.querySelector(".navbar-items");
const menu = document.querySelector(".toggle");

menu.addEventListener("click", () => {
  item.classList.toggle("show");
  let contain = document.querySelector("body");
  let container = document.querySelector(".my-container");

  if (item.classList.contains("show")) {
    contain.style.position = "fixed";
    contain.style.top = "0";
    contain.style.left = "0";
    contain.style.width = "100%";
    // index.classList.add("z-3");
    // container.classList.add("position-u");
  } else {
    contain.style.position = "unset";
  }
});

let scroll_btn = document.querySelector(".scroll_top");
let scroll_pt = 200;

scroll_btn.classList.add("d-none");
window.addEventListener("scroll", () => {
    if (window.scrollY > scroll_pt) {
        scroll_btn.classList.remove("d-none");
    } else {
        scroll_btn.classList.add("d-none");
    }
    scroll_btn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});

// AOS.init(
//     {
//         once: true,
//     }
// );
// let links = document.querySelectorAll(".nav_link");
// let body =document.body;


// links.forEach((link) => {
//     link.addEventListener("click", () => {
//         if (item.classList.contains("show")) {
//             item.classList.remove("show");
//             body.style.overflow="auto";
            
//         } else {
//             item.classList.add("show");
//             body.style.overflow="hidden";
//         }
//     });
// });

const nav = document.querySelectorAll(".nav_link");

nav.forEach((e) =>{
    e.addEventListener("click", function(){
        let contain = document.querySelector("body");
        contain.style.position = "unset";
        item.classList.toggle("show");
        document.getElementById("checkbox").checked = false;
    })
})