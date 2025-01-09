let menu = documnet.querySelector('#menu-icon');
let navbar = documnet.querySelector('.navbar');

menu.oneclick = () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    menu.classList.remove('bx-x')
    navbar.classList.remove('active')
}

// Typing Text Code

const typed = new Typed('.multiple-text', {
    strings: ['Physical Fitness', 'Diet Plans', 'Fat Loss' , 'Cardio Training' , 'Weight Lifting' , 'Weight Gain'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
  });