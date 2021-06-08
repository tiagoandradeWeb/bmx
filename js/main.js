const btnMenu = document.querySelector(".btn-mobile");

btnMenu.addEventListener('click', () =>{
    const nav = document.querySelector('.nav');

    nav.classList.toggle("active");
})