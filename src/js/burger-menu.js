export function handleMenuBurgerInteractions(){
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

    const burgerMenu= document.getElementById('menu-burger')

    burgerMenu.addEventListener('click', function(){
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
