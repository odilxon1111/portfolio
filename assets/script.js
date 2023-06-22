// Nav Scroll............
let Nav = document.querySelector('nav');

window.addEventListener('scroll',()=>{
    Nav.classList.toggle('nav-scroll',window.scrollY>0);
});


// Phone Menu.........
let navLink = document.querySelector('.nav-link');
let open = document.querySelector('.open');
let close = document.querySelector('.close');

open.addEventListener('click',()=>{
    navLink.style.display='block';
    open.style.display='none';
    close.style.display='inline-block'
});

close.addEventListener('click',()=>{
    navLink.style.display='none';
    open.style.display='inline-block';
    close.style.display='none'
})