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

const images = document.querySelectorAll('.carousel__img img');
const texts = document.querySelectorAll('.carousel__content h3');
const controls = document.querySelectorAll('.carousel__control li')
const right = document.querySelector('.carousel__arrow--right');
const left = document.querySelector('.carousel__arrow--left');
const time = 8000;

index = 0;

setInterval(() => {
    if (index === 0) {
        images[index].classList.remove('carousel__img--active');
        texts[index].classList.remove('carousel__content--active');
        controls[index].classList.remove('carousel__control--active');
        index++;
        images[index].classList.add('carousel__img--active');
        texts[index].classList.add('carousel__content--active');
        controls[index].classList.add('carousel__control--active');
    } else if (index === 1) {
        images[index].classList.remove('carousel__img--active');
        texts[index].classList.remove('carousel__content--active');
        controls[index].classList.remove('carousel__control--active');
        index++;
        images[index].classList.add('carousel__img--active');
        texts[index].classList.add('carousel__content--active');
        controls[index].classList.add('carousel__control--active');
    } else {
        images[index].classList.remove('carousel__img--active');
        texts[index].classList.remove('carousel__content--active');
        controls[index].classList.remove('carousel__control--active');
        index = 0;
        images[index].classList.add('carousel__img--active');
        texts[index].classList.add('carousel__content--active');
        controls[index].classList.add('carousel__control--active');
    }
}, time)

controls.forEach((element, i) => {
    element.addEventListener('click', () => {
        document.querySelector('.carousel__control--active').classList.remove('carousel__control--active');
        document.querySelector('.carousel__img--active').classList.remove('carousel__img--active');
        document.querySelector('.carousel__content--active').classList.remove('carousel__content--active');
        element.classList.add('carousel__control--active');
        index = i;
        images[index].classList.add('carousel__img--active');
        texts[index].classList.add('carousel__content--active');
    });
});

right.addEventListener('click', () => {
    index = (index < images.length - 1) ? index + 1 : images.length - 1;
    document.querySelector('.carousel__img--active').classList.remove('carousel__img--active');
    document.querySelector('.carousel__content--active').classList.remove('carousel__content--active');
    document.querySelector('.carousel__control--active').classList.remove('carousel__control--active');
    images[index].classList.add('carousel__img--active');
    texts[index].classList.add('carousel__content--active');
    controls[index].classList.add('carousel__control--active');
});

left.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : 0;
    document.querySelector('.carousel__img--active').classList.remove('carousel__img--active');
    document.querySelector('.carousel__content--active').classList.remove('carousel__content--active');
    document.querySelector('.carousel__control--active').classList.remove('carousel__control--active');
    images[index].classList.add('carousel__img--active');
    texts[index].classList.add('carousel__content--active');
    controls[index].classList.add('carousel__control--active');
});


// Section certification and video

const bpa = document.querySelector('.bpa');
const bpm = document.querySelector('.bpm');
const bpf = document.querySelector('.bpf');
const pbv = document.querySelector('.pbv');
const video = document.querySelector('.video__main');

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