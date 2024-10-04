import Product from "./entities/Product";
import { fetchData } from "./api";
//get json datas and transform it into an array of objects Product
export async function getProducts(){
    const data = await fetchData();
    return data.map(element => {
        return new Product(
            element.id,
            element.title,
            element.description,
            element.price,
            element.imageUrl,
            element.category,
            element.colors,
            element.productUrl,
            element.dateAdded
        );
    });
}
//get all data then sort it by date and then get only the X last ones
async function getLastProducts(x) {
    const products = await getProducts(x);
    return products.sort((a, b) => b.getTimestamp() - a.getTimestamp()).slice(0, x)
}
//hydrate template with Product object and some logic inside it
function hydrateTemplate(product) {
    const template = document.getElementById('template__shop-list').content;
    const clone = document.importNode(template, true);
    clone.querySelector('.product-card__img').src = product.getRelativeImageUrl();
    clone.querySelector('.product-card__img').alt = product.title;
    clone.querySelector('.product-card__ttl').textContent = product.title;
    clone.querySelector('.product-card__cat').textContent = product.category;
    clone.querySelector('.product-card__price').childNodes[0].textContent = product.getEuro();
    clone.querySelector('.product-card__cent').textContent = product.getCent();    
    clone.querySelector('.product-card__dsc').textContent = product.description;
    clone.querySelector('.button--blue-text-white').onclick = () => {
        window.location.href = product.url;
    };
    document.querySelector('.product-list').appendChild(clone);
}
//handle card list by calling the last product function and then hydrate the template with only the number of product desired
export async function handleCardList(paginate){
    const lastProducts = await getLastProducts(paginate)
    lastProducts.forEach(element => {
        hydrateTemplate(element)
    });;
}