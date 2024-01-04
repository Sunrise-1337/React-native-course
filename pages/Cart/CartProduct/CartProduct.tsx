import { View, Image, Text } from "react-native";
import { ProductModel } from "../../../models/products.model";
import { ProductStyles } from '../../../shared/styles/Product.styles'

import favourite from '../../../assets/images/favourite.png'
import not_favourite from "../../../assets/images/not_favourite.png"
import cross from "../../../assets/images/close_button.png"
import newItem from "../../../assets/images/new.png"

import { CustomTouchable } from "../../../shared/components/CustomTouchable/CustomTouchable"
import { BuyButton } from "../../../shared/components/BuyButton/BuyButton";

import CartStore from "../../../stores/CartStore";
import { observer } from "mobx-react";

function Product(props: ProductProps) {
    const pizzaData = props.data,
        {isFavourite, isNew, name, price, oldPrice, desc, image} = pizzaData

    return (
        <View style={ProductStyles.productWrap}>
            <View style={ProductStyles.product}>
                <View style={ProductStyles.imageWrapper}>
                    <Image style={ProductStyles.productImage} source={image} />
                    {isNew &&
                        <Image style={ProductStyles.new} source={newItem} />
                    }
                </View>
                <View style={ProductStyles.infoWrap}>
                    <View style={ProductStyles.topTextRow}>
                        <Text style={ProductStyles.title}>
                            {name}
                        </Text>
                        <Image style={ProductStyles.favourite} 
                                source={
                                    isFavourite 
                                        ? favourite
                                        : not_favourite
                                } />
                    </View>
                    <View style={ProductStyles.middleTextRow}>
                        <Text style={ProductStyles.price}>
                            {price} UAH
                        </Text>
                        {!!oldPrice && 
                            <Text style={ProductStyles.oldPrice}>
                                {oldPrice} UAH
                            </Text>
                        }
                    </View>
                    <View style={ProductStyles.bottomTextRow}>
                        <BuyButton product={pizzaData} />
                        <CustomTouchable onPress={() => CartStore.toDeleteDishTypeFromOrder(pizzaData)}>
                            <Image source={cross} style={ProductStyles.delete}/>
                        </CustomTouchable>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default observer(Product)

interface ProductProps {
    data: ProductModel,
}