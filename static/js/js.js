var menubtn = document.querySelector('.harmburber');
var navitems =  document.querySelectorAll('.nav-item');
var menu = document.querySelector('.menu');
var harmnav = document.querySelector('.harm-nav');

menubtn.addEventListener('click', toggleMenu);

let showMenu = false;
function toggleMenu(){
    if(!showMenu){
        menubtn.classList.add('close');
        menu.classList.add('show');
        harmnav.classList.add('show');
        navitems.forEach(item => item.classList.add('show'));
        showMenu = true;
    }
    
    else{
        menubtn.classList.remove('close');
        menu.classList.remove('show')
        harmnav.classList.remove('show')
        navitems.forEach(item => item.classList.remove('show'));
        showMenu = false;

    }

}

