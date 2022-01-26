let menubtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menubtn.addEventListener('click',() => {
    navbar.classList.toggle('active');
})