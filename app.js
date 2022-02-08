let menu = document.querySelector('.fa-bars');
let navBar = document.querySelector('.navbar');

menu.onclick = () =>{
menu.classList.toggle('fa-times');
navBar.classList.toggle('active');
}

window.onscroll =()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}