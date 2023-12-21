import { ProductInterface } from "../interfaces/products.interface";
import pizza from "../assets/images/product/pizza.png"

export const productsArray: ProductInterface[] = [
    {
        name: 'Pizza 1',
        id: 1,
        isNew: true,
        price: 200,
        isFavourite: false,
        image: pizza,
        desc: 'Sausage, cheese, tomatoes'
    },
    {
        name: 'Pizza 2',
        id: 2,
        isNew: false,
        price: 200,
        oldPrice: 250,
        isFavourite: true,
        image: pizza,
        desc: 'Onion, pepper, chicken, cheese'
    },
    {
        name: 'Pizza 3',
        id: 3,
        isNew: false,
        price: 150,
        oldPrice: 180,
        isFavourite: false,
        image: pizza,
        desc: 'Mushroom, bell pepper, olives'
    },
    {
        name: 'Pizza 4',
        id: 4,
        isNew: false,
        price: 180,
        oldPrice: 200,
        isFavourite: true,
        image: pizza,
        desc: 'Pepperoni, jalapenos, cheese'
    },
    {
        name: 'Pizza 5',
        id: 5,
        isNew: false,
        price: 170,
        oldPrice: 190,
        isFavourite: false,
        image: pizza,
        desc: 'Bacon, pineapple, onions, cheese'
    },
    {
        name: 'Pizza 6',
        id: 6,
        isNew: true,
        price: 190,
        isFavourite: true,
        image: pizza,
        desc: 'Chicken, spinach, feta cheese'
    },
    {
        name: 'Pizza 7',
        id: 7,
        isNew: false,
        price: 180,
        oldPrice: 200,
        isFavourite: true,
        image: pizza,
        desc: 'Ham, mushrooms, onions, cheese'
    },
    {
        name: 'Pizza 8',
        id: 8,
        isNew: false,
        price: 200,
        oldPrice: 220,
        isFavourite: false,
        image: pizza,
        desc: 'Pepperoni, sausage, bacon, cheese'
    },
    {
        name: 'Pizza 9',
        id: 9,
        isNew: true,
        price: 220,
        isFavourite: false,
        image: pizza,
        desc: 'Garlic, tomatoes, basil, cheese'
    },
    {
        name: 'Pizza 10',
        id: 10,
        isNew: false,
        price: 210,
        oldPrice: 230,
        isFavourite: true,
        image: pizza,
        desc: 'Garlic, tomatoes, basil, cheese'
    }
]

export const extraProducts: ProductInterface[] = [
    {
        name: 'Pizza 11',
        id: 11,
        isNew: true,
        price: 190,
        isFavourite: true,
        image: pizza,
        desc: 'Chicken, bell peppers, onions, mozzarella cheese'
      },
      {
        name: 'Pizza 12',
        id: 12,
        isNew: false,
        price: 180,
        oldPrice: 200,
        isFavourite: true,
        image: pizza,
        desc: 'Spinach, mushrooms, black olives, feta cheese'
      },
      {
        name: 'Pizza 13',
        id: 13,
        isNew: false,
        price: 210,
        oldPrice: 220,
        isFavourite: false,
        image: pizza,
        desc: 'Pepperoni, jalapenos, red onions, cheddar cheese'
      },
      {
        name: 'Pizza 14',
        id: 14,
        isNew: true,
        price: 220,
        isFavourite: false,
        image: pizza,
        desc: 'Garlic, tomatoes, basil, mozzarella cheese'
      },
      {
        name: 'Pizza 15',
        id: 15,
        isNew: false,
        price: 200,
        oldPrice: 230,
        isFavourite: true,
        image: pizza,
        desc: 'Mushrooms, green peppers, olives, provolone cheese'
      }
]

export const productsOnRefresh: ProductInterface[] = [
    {
        name: 'Pizza -1',
        id: -1,
        isNew: true,
        price: 190,
        isFavourite: true,
        image: pizza,
        desc: 'Chicken, bell peppers, onions, mozzarella cheese'
    },
    {
        name: 'Pizza 0',
        id: 0,
        isNew: false,
        price: 180,
        oldPrice: 200,
        isFavourite: true,
        image: pizza,
        desc: 'Spinach, mushrooms, black olives, feta cheese'
    },
    ...productsArray
]