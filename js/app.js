function onScroll (event) {
    let sections = document.querySelectorAll('nav a');
    let scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    for (let i = 0; i < sections.length; i++) {
        let currLink = sections[i];
        let val = currLink.getAttribute('href');
        let refElement = document.querySelector(val);
            if (refElement.offsetTop <= scrollPos && (refElement.offsetTop + refElement.offsetHeight > scrollPos)) {
                document.querySelector('nav ul li a').classList.remove('active');
                currLink.classList.add('active');
            } else {
                currLink.classList.remove('active');
            }
    }
};
window.document.addEventListener('scroll', onScroll );

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

sr.reveal('.work__img',{interval: 500});
sr.reveal('.fx',{interval: 350});
sr.reveal('.info',{delay: 400});