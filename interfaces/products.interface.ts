import { ImageSourcePropType } from "react-native";

export interface ProductInterface {
    name: string,
    price: number,
    oldPrice?: number,
    isNew: boolean, 
    isFavourite: boolean,
    image: ImageSourcePropType,
    desc: string
}