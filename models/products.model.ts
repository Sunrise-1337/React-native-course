import { ImageSourcePropType } from "react-native";

export class ProductModel {
    name: string;
    price: number;
    id: number;
    oldPrice?: number;
    isNew: boolean;
    isFavourite: boolean;
    image: ImageSourcePropType;
    desc: string;
}