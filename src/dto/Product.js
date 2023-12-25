export class ProductDTO {
    id;
    image;
    description;
    price;
    quantity;
    rating;
    name;
    constructor(data) {
        this.id = data.id;
        this.image= data.image;
        this.description = data.description;
        this.price = data.price;
        this.quantity = data.quantity;
        this.rating = data.rating;
        this.name = data.name;
    }
}