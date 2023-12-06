import { ProductInterface } from "../interfaces/products.interface";
import pizza from "../assets/images/pizza.png"

export const productsArray: ProductInterface[] = [
    {
        name: 'Pizza 1',
        isNew: true,
        price: 200,
        isFavourite: false,
        image: pizza,
        desc: 'Sausage, cheese, tomatoes'
    },
    {
        name: 'Pizza 2',
        isNew: false,
        price: 200,
        oldPrice: 250,
        isFavourite: true,
        image: pizza,
        desc: 'Onion, pepper, chicken, cheese'
    },
    {
        name: 'Pizza 3',
        isNew: false,
        price: 150,
        oldPrice: 180,
        isFavourite: false,
        image: pizza,
        desc: 'Mushroom, bell pepper, olives'
    },
    {
        name: 'Pizza 4',
        isNew: false,
        price: 180,
        oldPrice: 200,
        isFavourite: true,
        image: pizza,
        desc: 'Pepperoni, jalapenos, cheese'
    },
    {
        name: 'Pizza 5',
        isNew: false,
        price: 170,
        oldPrice: 190,
        isFavourite: false,
        image: pizza,
        desc: 'Bacon, pineapple, onions, cheese'
    },
    {
        name: 'Pizza 6',
        isNew: true,
        price: 190,
        isFavourite: true,
        image: pizza,
        desc: 'Chicken, spinach, feta cheese'
    },
    {
        name: 'Pizza 7',
        isNew: false,
        price: 180,
        oldPrice: 200,
        isFavourite: true,
        image: pizza,
        desc: 'Ham, mushrooms, onions, cheese'
    },
    {
        name: 'Pizza 8',
        isNew: false,
        price: 200,
        oldPrice: 220,
        isFavourite: false,
        image: pizza,
        desc: 'Pepperoni, sausage, bacon, cheese'
    },
    {
        name: 'Pizza 9',
        isNew: true,
        price: 220,
        isFavourite: false,
        image: pizza,
        desc: 'Garlic, tomatoes, basil, cheese'
    },
    {
        name: 'Pizza 10',
        isNew: false,
        price: 210,
        oldPrice: 230,
        isFavourite: true,
        image: pizza,
        desc: 'Garlic, tomatoes, basil, cheese'
    }
]