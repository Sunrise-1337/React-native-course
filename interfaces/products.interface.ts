export interface ProductInterface {
    name: string,
    price: number,
    oldPrice?: number,
    isNew: boolean, 
    isFavourite: boolean,
    image: string,
    desc: string
}