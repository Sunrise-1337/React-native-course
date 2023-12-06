import { View, Image, Text } from "react-native";
import { ProductInterface } from "../../../../interfaces/products.interface";
import { ProductStyles } from "./Product.styles";

import favourite from "../../../../assets/images/favourite.png"
import not_favourite from "../../../../assets/images/not_favourite.png"
import cart from "../../../../assets/images/cart.png"
import newItem from "../../../../assets/images/new.png"

export default function Product(props: ProductProps) {
    const {isFavourite, isNew, name, price, oldPrice, desc, image} = props.data;

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
                        <View style={ProductStyles.purchase}>
                            <Text style={ProductStyles.purchase__text}>
                                Buy
                            </Text>
                            <Image style={ProductStyles.purchase__img} source={cart} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

interface ProductProps {
    data: ProductInterface,
}