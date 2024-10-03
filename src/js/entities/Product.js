export default class Product{
    constructor(id, title, description, price, img, category, colors, url, date){
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.img = img;
        this.category = category;
        this.colors = colors;
        this.url = url;
        this.date = date;
    }

    getPriceInEuro() {
        const  [int, decimal] = this.price.toFixed(2).split('.');
        return [int, decimal];
    }

    getTimestamp() {
        return new Date(this.date).getSeconds();
    }
    getRelativeImageUrl() {
        if(!this.img){
            return;
        }
        return `/img/${this.img.split('/').pop()}`;
    }

    getEuro(){
        return `${this.getPriceInEuro()[0]}€`
    }
    getCent(){
        return this.getPriceInEuro()[1]
    }
}