import { View, Image, Text } from "react-native";
import { ProductModel } from "../../../models/products.model";
import { CartFooterStyles } from "./CartFooter.styles"

import favourite from '../../../assets/images/favourite.png'
import not_favourite from "../../../assets/images/not_favourite.png"
import cross from "../../../assets/images/close_button.png"
import newItem from "../../../assets/images/new.png"

import { CustomTouchable } from "../../../shared/components/CustomTouchable/CustomTouchable"
import CartStore from "../../../stores/CartStore";
import { observer } from "mobx-react";
import { BuyButton } from "../../../shared/components/BuyButton/BuyButton";

export function CartFooter() {

    return (
        <View style={CartFooterStyles.footer}>
            <View style={CartFooterStyles.left_block}>
                <Text style={CartFooterStyles.totalHeader}>
                    Total Price:
                </Text>
                <Text style={CartFooterStyles.totalAmount}>
                    {CartStore.totalPrice}
                </Text>
            </View>
            <View style={CartFooterStyles.right_block}>
                <View style={CartFooterStyles.button_wrapper}>
                    <CustomTouchable onPress={() => CartStore.toCleanTheCart()} 
                                    style={CartFooterStyles.button} rippleFullCoverage>
                        <Text style={CartFooterStyles.button_text}>
                            Submit order
                        </Text>
                    </CustomTouchable>
                </View>
            </View>
        </View>
    )
}