import { RouteProp } from "@react-navigation/native";
import { RoutesConstants } from "../constants/routes.constants";
import { ProductInterface } from "./products.interface";

//  Это все для того, чтобы в routePropsTypes ключами могли быть 
//  только значения из энама RoutesConstants. При этом они опциональные
type objectWithRoutesConstantsKeys = {
    [K in keyof typeof RoutesConstants]: K extends keyof typeof RoutesConstants
      ? typeof RoutesConstants[K]
      : never;
  };
  
type optionalRoutesConstantsKeys = {
    [K in objectWithRoutesConstantsKeys[keyof objectWithRoutesConstantsKeys]]?: any;
};

export interface routePropsTypes extends optionalRoutesConstantsKeys {
    SinglePizza: {
        pizza: ProductInterface
    },

    Promotions: {},

    [key: string]: any
};
  
export type RoutePropsData<pageType extends keyof routePropsTypes> = RouteProp<routePropsTypes, pageType>