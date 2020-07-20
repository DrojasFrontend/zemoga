export const spinner = function () {
  let spinner = document.getElementById("spinner");
  fadeOut(spinner);
};

export const fadeOut = function (el) {
  el.style.opacity = 1;
  (function fade() {
    if ((el.style.opacity -= 0.1) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
};

export const openSubMenu = function (e) {
  var parent = this.parentElement;

  if (!parent.classList.contains("active")) {
    parent.classList.add("active");
  } else {
    parent.classList.remove("active");
  }
};

export const headerScroll = function () {
  window.onscroll = function (e) {
    var distance = window.pageYOffset;
    if (distance > 50) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  };
};
