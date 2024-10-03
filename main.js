import '/src/css/style.css';
import 'the-new-css-reset/css/reset.css'
import { handleMenuBurgerInteractions } from '/src/js/burger-menu.js';
import { handleCardList } from '/src/js/card-list.js';


async function main(int){
    await handleCardList(int);
    handleMenuBurgerInteractions();  
}

main(4);
