const hamburger = document.querySelector('.hamburger');
const headerNav = document.querySelector('.header__list');

hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle('active');
    headerNav.classList.toggle('active');
}

const headerLink = document.querySelectorAll('.header__link');

headerLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu() {
    hamburger.classList.remove('active');
    headerNav.classList.remove('active');
}

// Blog accordion

var accItem = document.getElementsByClassName("blog__accordion");
var accHD = document.getElementsByClassName("blog__content--title");

for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener("click", toggleItem, false);
}

function toggleItem() {
    let itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = "blog__accordion blog__close";
    }
    if (itemClass == "blog__accordion blog__close") {
        this.parentNode.className = "blog__accordion blog__open";
    }
}