import { FlatList, Text, View } from "react-native";
import { ProductModel } from "../../models/products.model";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { RoutesConstants } from "../../constants/routes.constants";
import { StackDataType } from "../../interfaces/stack-navigation-data.type";
import { PizzaNavigationData } from "../MainStack/SinglePizza/SinglePizza";
import { observer } from "mobx-react";
import { isLastElementInArray } from "../../helper/helper";
import CartStore from "../../stores/CartStore";
import { CustomTouchable } from "../../shared/components/CustomTouchable/CustomTouchable";
import { FlatListStyles } from "../../shared/styles/FlatList.styles";
import CartProduct from "./CartProduct/CartProduct";
import { CartFooter } from "./CartFooter/CartFooter";
import { CartStyles } from "./Cart.styles";

export const Cart = observer(() => {
    const navigationHook = useNavigation<StackDataType<{}>>();


    const onPizzaClick = (pizza: ProductModel): void => {
        navigationHook.navigate(RoutesConstants.singlePizzaScreen, {
            pizza
        })
    }

    return (
        <View style={CartStyles.wrapper}>
            <FlatList style={FlatListStyles.cart_wrap}
                    data={Object.values(CartStore.orders)}
                    renderItem={({item, index}) => {
                        return (
                            <CustomTouchable 
                                    style={
                                        !isLastElementInArray(index, Object.values(CartStore.orders))
                                            ? FlatListStyles.element__margin_wrapper
                                            : FlatListStyles.cartElement__margin_wrapper
                                    }
                                    onPress={() => onPizzaClick(item)}
                                    withoutFeedback>
                                <CartProduct data={item}/>
                            </CustomTouchable>
                        )
                    }}
                    ListEmptyComponent={() => <Text>No results</Text>}
                    contentContainerStyle={FlatListStyles.element__wrapper}
                    keyExtractor={item => '' + item.id}
                />
            <CartFooter />
        </View>
    )
})