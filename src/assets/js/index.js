document.addEventListener("DOMContentLoaded", function () {
  let menu = document.querySelector(".menu");
  let closeBtn = document.querySelector("#btn");
  let searchBtn = document.querySelector(".bx-search");

  closeBtn.addEventListener("click", () => {
    menu.classList.toggle("open");
    menuBtnChange();
  });

  searchBtn.addEventListener("click", () => {
    menu.classList.toggle("open");
    menuBtnChange();
  });

  function menuBtnChange() {
    if (menu.classList.contains("open")) {
      closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
      closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
  }

  function togglePassword() {
    document
      .querySelectorAll(".eye")
      .forEach((eye) => eye.classList.toggle("hide"))
    const type = senha.getAttribute("type") == "password" ? "text" : "password"
    senha.setAttribute("type", type)
  }

});
