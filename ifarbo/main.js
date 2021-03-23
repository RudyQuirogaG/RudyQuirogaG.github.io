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

// Slider Section

const slider = document.querySelector('.slider');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const indicatorParent = document.querySelector('.control ul');
const indicators = document.querySelectorAll('.control li');

index = 0;

indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
        document.querySelector('.control .selected').classList.remove('selected');
        indicator.classList.add('selected');
        slider.style.transform = 'translateX(' + (i) * -(100 / 3) + '%)';
        index = i;
    });
});

left.addEventListener('click', function () {
    index = (index > 0) ? index - 1 : 0;
    document.querySelector('.control .selected').classList.remove('selected');
    indicatorParent.children[index].classList.add('selected');
    slider.style.transform = 'translateX(' + (index) * -(100 / 3) + '%)';
});

right.addEventListener('click', function () {
    index = (index < 3 - 1) ? index + 1 : 2;
    document.querySelector('.control .selected').classList.remove('selected');
    indicatorParent.children[index].classList.add('selected');
    slider.style.transform = 'translateX(' + (index) * -(100 / 3) + '%)';
});


// Product Slider