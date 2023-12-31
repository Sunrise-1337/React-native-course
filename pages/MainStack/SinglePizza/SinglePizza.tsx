import { Text, Image, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { ProductModel } from "../../../models/products.model";
import { RoutesConstants } from "../../../constants/routes.constants";
import { RoutePropsData } from "../../../interfaces/route-props-data.type";
import { SinglePizzaStyles } from "./SinglePizza.styles";
import { BuyButton } from "../../../shared/components/BuyButton/BuyButton";

export default function SinglePizza() {
    const route = useRoute<RoutePropsData<RoutesConstants.singlePizzaScreen>>(),
        pizzaData = route.params.pizza

    return (
        <View style={SinglePizzaStyles.wrap}>
            <Image source={pizzaData.image} style={SinglePizzaStyles.image}/>
            <Text style={SinglePizzaStyles.title}>
                {pizzaData.name}
            </Text>
            <BuyButton product={pizzaData} />
            <Text style={SinglePizzaStyles.description}>
                {pizzaData.desc}
            </Text>
        </View>
    )
}

export interface PizzaNavigationData {
    pizza: ProductModel
}