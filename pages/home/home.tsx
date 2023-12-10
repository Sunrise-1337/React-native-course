import { useEffect, useState, useContext } from "react";
import { FlatList, View } from "react-native";
import { ProductInterface } from "../../interfaces/products.interface";
import { productsArray } from "../../server-mock/products.mock";
import Product from "./components/Product/Product";
import { HomeStyles } from "./Home.styles";
import { Filters } from "./components/Filters/Filters";
import { FavouritesModal } from "./components/FavouritesModal/FavouritesModal";
import { FiltersContext } from "../../contexts/filters-context/filters-context";

export default function Home() {
    const [products, setProducts] = useState<ProductInterface[]>([]),
        [isFavouritesMode, setIsFavouritesMode] = useState<boolean>(false),
        [searchRequest, setSearchRequest] = useState<string>(''),
        { filtersState } = useContext(FiltersContext);

    useEffect(() => {
        setProducts(productsArray)
    }, [])

    useEffect(() => {
        toFilterProductsBySearchRequest()
        toFilterNewProducts()
    }, [filtersState, searchRequest])

    const isLastElementInProductsArray = (index: number): boolean => {
        return index === products.length - 1
    },

    toFilterNewProducts = (): void => {
        if (filtersState?.isNew) {
            setProducts(prev => prev.filter(el => el.isNew))
        }
    },

    toFilterProductsBySearchRequest = () => {
        if (searchRequest) {
            const productsByRequest = productsArray.filter(el => {
                const requestInLowerCase = searchRequest.toLowerCase()
    
                return (el.name.toLowerCase() + el.desc.toLowerCase()).includes(requestInLowerCase)
            })
    
            setProducts(productsByRequest)
        } else {
            setProducts(productsArray)
        }
    }

    return (
        <> 
            <Filters onToggleFavourites={setIsFavouritesMode} onRequestInput={setSearchRequest}/>
            <FlatList style={HomeStyles.home}
                data={products}
                renderItem={({item, index}) => {
                    return (
                        <View style={
                                !isLastElementInProductsArray(index)
                                    ? HomeStyles.product__margin_wrapper
                                    : null
                                }
                                key={item.name}>
                            <Product data={item}/>
                        </View>
                    )
                }}
                contentContainerStyle={HomeStyles.product__wrapper}
                keyExtractor={item => item.name}
            />
            <FavouritesModal isVisible={isFavouritesMode} setIsVisible={setIsFavouritesMode} />
        </>
    )
}