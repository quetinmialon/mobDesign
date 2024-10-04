import { getProducts } from "./card-list";

export async function handleCategories(){
    const data =  await getProducts();
    hydrateCategories(extradeCategoriesJustOnce(data));
}

//get categories from product collection and put it just once in an array
function extradeCategoriesJustOnce(data){
    const categories = [];
    data.forEach(element => {
        if(!categories.includes(element.category)){
            categories.push(element.category);
        }
    });
    return categories;
}

//formate name of categoies to adapt it to url link 
function formatCategory(category) {
  return category
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase() 
        .replace(/\s+/g, "-");

}

//hydrate template with formated datas
function hydrateCategories(categories) {
    const ulElement = document.querySelector(".categories__card");
    const template = document.querySelector(".js-categories__card");

    categories.forEach(category => {
        const clone = template.content.cloneNode(true);
        const formattedCategory = formatCategory(category);
        const imgElement = clone.querySelector(".card__img");
        const titleElement = clone.querySelector(".card__ttl");
        imgElement.src = `/img/${formattedCategory}.webp`;
        imgElement.alt = category;
        titleElement.textContent = category; 
        ulElement.appendChild(clone);
    });
}