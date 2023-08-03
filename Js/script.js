let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.right-menu');
menuIcon.onclick = () =>  {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// scrool
let sections = document.querySelectorAll('.content-list')
let navlinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    // sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.screenY > 100);

    // remove toggle icon and navbar when click navbar link

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


// login 
// var login  = document.querySelector(".login") ;
// var wrpr = document.querySelector(".wrapper");

// login.addEventListener("click",function(){
//     wrpr.style.display="block";

// })