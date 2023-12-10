import { useEffect, useState, useContext } from "react";
import { FlatList, View, Text, RefreshControl } from "react-native";
import { ProductInterface } from "../../interfaces/products.interface";
import { extraProducts, productsArray, productsOnRefresh } from "../../server-mock/products.mock";
import Product from "./components/Product/Product";
import { HomeStyles } from "./Home.styles";
import { Filters } from "./components/Filters/Filters";
import { FavouritesModal } from "./components/FavouritesModal/FavouritesModal";
import { FiltersContext } from "../../contexts/filters-context/filters-context";
import React from "react";

export default function Home() {
    const [products, setProducts] = useState<ProductInterface[]>([]),
        [isFavouritesMode, setIsFavouritesMode] = useState<boolean>(false),
        [isRefreshing, setIsRefreshing] = useState<boolean>(false),
        [isListUpdatedOnEnd, setIsListUpdatedOnEnd] = useState<boolean>(false),
        [isListRefreshed, setIsListRefreshed] = useState<boolean>(false),
        [searchRequest, setSearchRequest] = useState<string>(''),
        { filtersState } = useContext(FiltersContext);

    useEffect(() => {
        setProducts(productsArray)
    }, [])

    useEffect(() => {
        toFilterProductsBySearchRequest()
        toFilterNewProducts()
    }, [filtersState, searchRequest, isListUpdatedOnEnd, isListRefreshed])

    const isLastElementInProductsArray = (index: number): boolean => {
        return index === products.length - 1
    },

    toFilterNewProducts = (): void => {
        if (filtersState?.isNew) {
            setProducts(prev => prev.filter(el => el.isNew))
        }
    },

    toFilterProductsBySearchRequest = () => {            
        let updatedProducts: ProductInterface[] = JSON.parse(JSON.stringify(productsArray));
            
        if (isListRefreshed) {
            updatedProducts.unshift(...productsOnRefresh)
        }

        if (isListUpdatedOnEnd) {
            updatedProducts.push(...extraProducts)
        }
        
        if (searchRequest) {
            updatedProducts = updatedProducts.filter(el => {
                const requestInLowerCase = searchRequest.toLowerCase()
    
                return (el.name.toLowerCase() + el.desc.toLowerCase()).includes(requestInLowerCase)
            })
    
        }

        setProducts(updatedProducts)
    },

    updateProductsList = (): void => {
        if (isListUpdatedOnEnd) return
        
        setIsListUpdatedOnEnd(true)
    },

    onRefresh = (): void => {
        if (isListRefreshed) return

        setIsRefreshing(true)

        setTimeout(() => {
            setIsListRefreshed(true)
            setIsRefreshing(false);
        }, 3000);
    };

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
                                }>
                            <Product data={item}/>
                        </View>
                    )
                }}
                ListEmptyComponent={() => <Text>No results</Text>}
                contentContainerStyle={HomeStyles.product__wrapper}
                keyExtractor={item => '' + item.id}
                onEndReached={() => updateProductsList()}
                refreshControl={
                    <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
                }
            />
            <FavouritesModal isVisible={isFavouritesMode} setIsVisible={setIsFavouritesMode} />
        </>
    )
}