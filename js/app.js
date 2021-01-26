const menu = document.querySelector('.food_options');
const add = document.querySelector('.add');

const newMenu = () =>{
   menu.classList.toggle('is-active');
    
}

add.addEventListener('click', newMenu)