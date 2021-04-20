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


// Accordion products

document.querySelectorAll('.accordion__title').forEach((item) => {
    item.addEventListener('click', (event) => {

        let accCollapse = item.nextElementSibling;

        // Open accordion item
        if (!item.classList.contains('open')) {

            accCollapse.style.display = 'block';
            let accHeight = accCollapse.clientHeight;

            setTimeout(() => {
                accCollapse.style.height = `${accHeight}px`;
                accCollapse.style.display = '';
            }, 100)

            accCollapse.classList = 'accordion__collapse collapsing'

            setTimeout(() => {
                accCollapse.classList = 'accordion__collapse open';
                accCollapse.style.display = '';
            }, 300);
        } else {
            // Close accordion item
            accCollapse.classList = 'accordion__collapse collapsing';

            setTimeout(() => {
                accCollapse.style.height = '0px';
            }, 100);

            setTimeout(() => {
                accCollapse.classList = 'accordion__collapse collapse'
                accCollapse.style.height = '';
            }, 300);
        }

        item.classList.toggle('open');
    });
});

// Slider Products


const mql = window.matchMedia('(max-width: 767px)');
const imagesProducts = document.querySelectorAll('.products__img img');
const rightProducts = document.querySelector('.products__arrow--right');
const leftProducts = document.querySelector('.products__arrow--left');
const timeProducts = 5000;

indexProducts = 0;

setInterval(() => {
    if (indexProducts === 0) {
        imagesProducts[indexProducts].classList.remove('products__img--active');
        indexProducts++;
        imagesProducts[indexProducts].classList.add('products__img--active');
    } else if (indexProducts < (imagesProducts.length - 1)) {
        imagesProducts[indexProducts].classList.remove('products__img--active');
        indexProducts++;
        imagesProducts[indexProducts].classList.add('products__img--active');
    } else {
        imagesProducts[indexProducts].classList.remove('products__img--active');
        indexProducts = 0;
        imagesProducts[indexProducts].classList.add('products__img--active');
    }
}, timeProducts)

rightProducts.addEventListener('click', () => {
    indexProducts = (indexProducts < imagesProducts.length - 1) ? indexProducts + 1 : imagesProducts.length - 1;
    document.querySelector('.products__img--active').classList.remove('products__img--active');
    imagesProducts[indexProducts].classList.add('products__img--active');
});

leftProducts.addEventListener('click', () => {
    indexProducts = (indexProducts > 0) ? indexProducts - 1 : 0;
    document.querySelector('.products__img--active').classList.remove('products__img--active');
    imagesProducts[indexProducts].classList.add('products__img--active');
});