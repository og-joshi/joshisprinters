// PAGE LOADER
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) loader.classList.add('hidden');
    }, 2000);
});

// CUSTOM CURSOR (desktop only)
const dot = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');
if (dot && ring && window.innerWidth > 968) {
    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;
    document.addEventListener('mousemove', e => {
        mouseX = e.clientX; mouseY = e.clientY;
        dot.style.left = mouseX + 'px';
        dot.style.top = mouseY + 'px';
    });
    (function animateRing() {
        ringX += (mouseX - ringX) * 0.12;
        ringY += (mouseY - ringY) * 0.12;
        ring.style.left = ringX + 'px';
        ring.style.top = ringY + 'px';
        requestAnimationFrame(animateRing);
    })();
    document.querySelectorAll('a, button, .why-card, .work-card, .testi-card, .client-pill, .process-step').forEach(el => {
        el.addEventListener('mouseenter', () => { dot.classList.add('hover'); ring.classList.add('hover'); });
        el.addEventListener('mouseleave', () => { dot.classList.remove('hover'); ring.classList.remove('hover'); });
    });
}

// NAV SHRINK
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 80);
    });
}

// MOBILE MENU
const mobileBtn = document.getElementById('mobile-btn');
const navMenu = document.getElementById('nav-menu');
if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', () => {
        mobileBtn.classList.toggle('open');
        navMenu.classList.toggle('open');
    });
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileBtn.classList.remove('open');
            navMenu.classList.remove('open');
        });
    });
}

// SCROLL REVEAL
function reveal() {
    document.querySelectorAll('.reveal').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) el.classList.add('active');
    });
}
window.addEventListener('scroll', reveal);
reveal();

// BACK TO TOP
const backToTop = document.getElementById('backToTop');
if (backToTop) {
    window.addEventListener('scroll', () => {
        backToTop.classList.toggle('visible', window.scrollY > 500);
    });
}