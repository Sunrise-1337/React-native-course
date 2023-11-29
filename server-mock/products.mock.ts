import { ProductInterface } from "../interfaces/products.interface";

export const productsArray: ProductInterface[] = [
    {
        name: 'Pizza 1',
        isNew: true, 
        price: 200,
        isFavourite: false,
        image: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg',
        desc: "Sausage, cheese, tomatoes"
    },
    {
        name: 'Pizza 2',
        isNew: false, 
        price: 200,
        oldPrice: 250,
        isFavourite: true,
        image: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg',
        desc: "Onion, pepper, chicken, cheese"
    }
]