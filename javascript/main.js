const nav_function = document.querySelector('.mobile-menu');
const nav_ul = document.querySelector('.mobile-side-bar');
nav_function.addEventListener('click',()=>{
    nav_ul.classList.toggle('d-inline')
})
