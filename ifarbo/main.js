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

const productSlider = document.querySelector('.product-slider');
const productLeft = document.querySelector('.product-left');
const productRight = document.querySelector('.product-right');
const productIndicatorParent = document.querySelector('.product-control ul');
const productIndicators = document.querySelectorAll('.product-control li');
productIndex = 0;

productIndicators.forEach((productIndicator, i) => {
    productIndicator.addEventListener('click', () => {
        document.querySelector('.product-control .product-selected').classList.remove('product-selected');
        productIndicator.classList.add('product-selected');
        productSlider.style.transform = 'translateX(' + (i) * -(100 / 3) + '%)';
        productIndex = i;
    });
});

productLeft.addEventListener('click', function () {
    productIndex = (productIndex > 0) ? productIndex - 1 : 0;
    document.querySelector('.product-control .product-selected').classList.remove('product-selected');
    productIndicatorParent.children[productIndex].classList.add('product-selected');
    productSlider.style.transform = 'translateX(' + (productIndex) * -(100 / 3) + '%)';
});

productRight.addEventListener('click', function () {
    productIndex = (productIndex < 3 - 1) ? productIndex + 1 : 2;
    document.querySelector('.product-control .product-selected').classList.remove('product-selected');
    productIndicatorParent.children[productIndex].classList.add('product-selected');
    productSlider.style.transform = 'translateX(' + (productIndex) * -(100 / 3) + '%)';
});

// Section certification

const bpa = document.querySelector('.bpa');
const bpm = document.querySelector('.bpm');
const bpf = document.querySelector('.bpf');
const pbv = document.querySelector('.pbv');
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1
};

function callback(entries, observer) {
    if (entries[0].isIntersecting) {
        bpa.classList.add('certification__bpa');
        bpm.classList.add('certification__bpm');
        bpf.classList.add('certification__bpf');
        pbv.classList.add('certification__pbv');
    } else {
        bpa.classList.remove('certification__bpa');
        bpm.classList.remove('certification__bpm');
        bpf.classList.remove('certification__bpf');
        pbv.classList.remove('certification__pbv');
    }
}

const observer = new IntersectionObserver(callback, options);
observer.observe(bpa, bpm, bpf, pbv);