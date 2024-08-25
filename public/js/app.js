let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.screenY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset * height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.screenY > 100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active')
}

ScrollReveal({
    reset: false,
    distance: "60px",
    duration: 1300,
    delay: 400,
});
ScrollReveal().reveal(".header, .heading", { delay: 500, origin: "top" });
ScrollReveal().reveal(
    ".skill-image, .project-box, .contact form, .footer",
    { delay: 500, origin: "bottom" }
);
ScrollReveal().reveal(
    ".home-content, .about-img",
    { delay: 500, origin: "left" }
);
ScrollReveal().reveal(
    ".home-img, .about-content",
    { delay: 500, origin: "right" }
);
