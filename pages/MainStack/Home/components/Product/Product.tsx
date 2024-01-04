import { View, Image, Text } from "react-native";
import { ProductModel } from "../../../../../models/products.model";
import { ProductStyles } from "../../../../../shared/styles/Product.styles"

import favourite from '../../../../../assets/images/favourite.png'
import not_favourite from "../../../../../assets/images/not_favourite.png"
import newItem from "../../../../../assets/images/new.png"
import { observer } from "mobx-react";
import { BuyButton } from "../../../../../shared/components/BuyButton/BuyButton";

function Product(props: ProductProps) {
    const {isFavourite, isNew, name, price, oldPrice, desc, image} = props.data

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
                        <Text style={ProductStyles.desc} ellipsizeMode="tail" numberOfLines={1}>
                            {desc}
                        </Text>
                        <BuyButton product={props.data} />
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