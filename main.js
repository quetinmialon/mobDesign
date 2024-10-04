import '/src/css/style.css';
import 'the-new-css-reset/css/reset.css'
import { handleMenuBurgerInteractions } from '/src/js/burger-menu.js';
import { handleCardList } from '/src/js/card-list.js';
import { handleCategories } from './src/js/categories';


async function main(int){
    await handleCardList(int);
    handleMenuBurgerInteractions();
    await handleCategories();  
}

main(8);
