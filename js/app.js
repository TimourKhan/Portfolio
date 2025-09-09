//Header fixed
window.onscroll = function () {
  const docScrollTop = document.documentElement.scrollTop;

  if (window.innerWidth > 991) {
    if (docScrollTop > 100) {
      document.querySelector("header").classList.add("fixed");
    } else {
      document.querySelector("header").classList.remove("fixed");
    }
  }
}

//Inject footer
document.addEventListener("DOMContentLoaded", () => {
  fetch("./footer.html")
    .then(response => response.text())
    .then(data => {
      const footer = document.createElement("footer");
      footer.innerHTML = data;
      document.body.appendChild(footer);
      //Footer year
      let year = document.querySelector(".year");
      year.innerHTML = new Date().getFullYear();
    })
    .catch(err => {
      console.error("Error loading footer:", err);
    });
});

//Hamburger
const hamBurger = document.querySelector(".hamburger");

hamBurger.addEventListener("click", function () {
  document.querySelector(".navbar").classList.toggle("navshow");
  document.querySelector(".navbar").classList.toggle("navhide");
})

/*if (window.innerWidth <= 767) {
  document.querySelector(".navbar").classList.add("hide");
} else {
  document.querySelector(".navbar").classList.remove("hide");
}
*/

//navbar links

/*const navbar = document.querySelector(".navbar");
a = navbar.querySelectorAll("a")

a.forEach(function (element) {
  element.addEventListener("click", function () {
    for (let i = 0; i < a.length; i++) {
      a[i].classList.remove("active")
    }
    this.classList.add("active");
    document.querySelector(".navbar").classList.toggle("show");
  })
})*/


//Remove anchor hash from URL when jumping to different sections
let url = window.location.href;
let urlWithoutHash = url.split('#')[0];
document.querySelectorAll('header a, .home a').forEach(anchor => {
  anchor.addEventListener('click', function () {
    setTimeout(() => {
      window.history.replaceState({}, document.title, urlWithoutHash);
    }, 5);
  });
});


//Remove anchor hash from URL when going back to index
function removeHash() {
  setTimeout(() => {
    history.pushState("", document.title, window.location.pathname
      + window.location.search);
  }, 150);
}
removeHash();


//Remove .html from URL
function removeHtmlFromUrl() {
  let cleanUrl = url.replace(/\.html$/, '');
  window.history.replaceState({}, document.title, cleanUrl);
}
removeHtmlFromUrl();


//Underline nav when reaching different sections
if (document.querySelector('#index')) {
  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll("nav ul li a");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - sectionHeight / 7) {
        current = section.getAttribute("id");
      }
    });

    navLi.forEach((li) => {
      li.classList.remove("active");
      if (li.classList.contains(current)) {
        li.classList.add("active");
      }
    });
  });
}


//Portfolio Gallery
const closeLightbox = document.querySelector(".close-lightbox");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = lightbox.querySelector("img");

lightbox.addEventListener("click", function () {
  if (event.target != lightboxImg) {
    lightbox.classList.remove("show");
    lightbox.classList.add("hide");
  }
});

closeLightbox.addEventListener("click", function () {
  lightbox.classList.remove("show");
  lightbox.classList.add("hide");
});

const gallery = document.querySelector(".itemimgs");

const galleryItem = document.querySelectorAll(".imgcontainer");

galleryItem.forEach(function (element) {
  element.querySelector(".itemimg").addEventListener("click", function () {
    lightbox.classList.remove("hide");
    lightbox.classList.add("show");
    lightboxImg.src = element.querySelector("img").getAttribute("src");
  });
});


