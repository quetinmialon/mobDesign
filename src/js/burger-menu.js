export function handleMenuBurgerInteractions(){
    // get the header height, check if the scroll Y position is lower than it and change bg color accordingly
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header')
        if (!header) return;
        const headerHome = document.querySelector('.hero-header')
        if (!headerHome) return;
        const headerHomeHeight = headerHome.offsetHeight;
        const headerHomeTopBarHeight = header.offsetHeight;
        if (window.scrollY > headerHomeHeight-headerHomeTopBarHeight) {
        header.classList.add('fixed');
        return;
        } 
        header.classList.remove('fixed');
    });
    // add a blure filter when scroll Y 
    window.addEventListener('scroll',function() {
        const header = document.querySelector('.hero-header__baseline')
        if(!header) {
            return
        }
        if (window.scrollY > 0) {
            header.classList.add('blured');
            return;
        }
        header.classList.remove('blured')
    });
    // check if navigation is open or not by checking if attribute hidden is here or not and swap it accordingly
    document.getElementById('menu-burger').addEventListener('click', function(){
        const menu = document.getElementById('menu')
        const icon = document.getElementById('menu-icon')
        if(!menu){
            return;
        }
        if(menu.hasAttribute('hidden')) {
            menu.removeAttribute('hidden');
            icon.removeAttribute('src');
            icon.removeAttribute('alt');
            icon.setAttribute('src','/assets/icons/Close.svg')
            icon.setAttribute('alt','fermer le menu')
            toggleBackgroundHeaderWhite();
            return;
        }
        menu.setAttribute('hidden', '');
        icon.removeAttribute('src');
        icon.removeAttribute('alt');
        icon.setAttribute('src','/assets/icons/Burger.svg')
        icon.setAttribute('alt','ouvrir le menu')
        toggleBackgroundHeaderWhite();
    });
}


//check if classlist contain white smoke or no and toggle it accordingly
function toggleBackgroundHeaderWhite(){
    const header = document.querySelector('.header')
    if(!header){
        return;
    }
    if(header.classList.contains('white-smoke')){
        header.classList.remove('white-smoke');
        return;
    }
    header.classList.add('white-smoke');
}
