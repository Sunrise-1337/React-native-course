import { View, Text, Image } from "react-native"
import { ProductModel } from "../../../models/products.model"
import CartStore from "../../../stores/CartStore"
import { CustomTouchable } from "../CustomTouchable/CustomTouchable"
import { BuyButtonStyle } from "./BuyButton.styles"
import { observer } from "mobx-react"

import cart from "../../../assets/images/cart.png"

export const BuyButton = observer(({product}) => {
    if (CartStore.orders[product.name]?.amountOfUnits) {
        return (
            <View style={BuyButtonStyle.purchase}>
                <CustomTouchable onPress={() => CartStore.toDeleteUnitFromOrder(product)} radius={10}>
                    <Text style={BuyButtonStyle.stepper_button}>
                        -
                    </Text>
                </CustomTouchable>
                <View>
                    <Text style={BuyButtonStyle.counter_display}>
                        {CartStore.orders[product.name]?.amountOfUnits}
                    </Text>
                </View>
                <CustomTouchable onPress={() => CartStore.toAddUnitToOrder(product)} radius={10}>
                    <Text style={BuyButtonStyle.stepper_button}>
                        +
                    </Text>
                </CustomTouchable>
            </View>
        )
    }
    return (
        <View style={BuyButtonStyle.purchase_wrap}>
            <CustomTouchable onPress={() => CartStore.toAddUnitToOrder(product)}
                            style={BuyButtonStyle.purchase} rippleFullCoverage>
                <Text style={BuyButtonStyle.purchase__text}>
                    Buy
                </Text>
                <Image style={BuyButtonStyle.purchase__img} source={cart} />
            </CustomTouchable>
        </View>
    )
})

interface BuyButton {
    product: ProductModel
}