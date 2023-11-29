import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { ProductInterface } from "../../interfaces/products.interface";
import { productsArray } from "../../server-mock/products.mock";
import Product from "./components/product";
import { HomeStyles } from "./home.styles";

export default function Home() {
    const [products, setProducts] = useState<ProductInterface[]>([]);

    useEffect(() => {
        setProducts(productsArray)
    }, [])

    return (
        <ScrollView style={HomeStyles.home}>
            {!!products.length &&
                products.map((el: ProductInterface) => 
                    <Product data={el} key={el.name}></Product>
                )
            }
        </ScrollView>
    )
}