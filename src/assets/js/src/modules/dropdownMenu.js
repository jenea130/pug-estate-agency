 export default function dropdownMenu() {
  const element = document.querySelector(".menu__has-children");
  const menu = document.querySelector(".menu__sub-menu");

  element.addEventListener("mouseover", () => {
    menu.style.display = "block";
  });
  menu.addEventListener("mouseleave", () => {
    menu.style.display = "none";
  });
}
