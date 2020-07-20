// Soport Internet Explorer
import "whatwg-fetch";

import { fadeOut, openSubMenu, headerScroll } from "./utils";

const header = document.getElementById("header");
const searchForm = document.getElementById("searchForm");
const search = document.getElementById("searchButton");
const closeSearchButton = document.getElementById("closeSearchButton");
const openMenuMobile = document.getElementById("openMenuMobile");
const menuItem = document.getElementById("menuItem");
const menssageBox = document.getElementById("menssageBox");
const closeMessage = document.getElementById("closeMessage");
const headerMenuItem = document.querySelectorAll(".header__menu li button");

const voteNow = document.getElementById("voteNow");

search.addEventListener("click", function () {
  searchForm.classList.add("active");
});

closeSearchButton.addEventListener("click", function () {
  searchForm.classList.remove("active");
});

openMenuMobile.addEventListener("click", function () {
  openMenuMobile.classList.toggle("active");
  menuItem.classList.toggle("active");
});

closeMessage.addEventListener("click", function () {
  fadeOut(menssageBox);
});

for (var i = 0; i < headerMenuItem.length; i++) {
  headerMenuItem[i].addEventListener("click", openSubMenu);
}

// Header Scroll
headerScroll();
