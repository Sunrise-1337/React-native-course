import { useEffect, useState, useContext, useMemo } from "react";
import { FlatList, Text, RefreshControl, View } from "react-native";
import { ProductInterface } from "../../../interfaces/products.interface";
import { extraProducts, productsArray, productsOnRefresh } from "../../../server-mock/products.mock";
import Product from "./components/Product/Product";
import { HomeStyles } from "./Home.styles";
import { Filters } from "./components/Filters/Filters";
import { FiltersContext } from "../../../contexts/filters-context/filters-context";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { RoutesConstants } from "../../../constants/routes.constants";
import { CustomTouchable } from "../../../shared/components/CustomTouchable/CustomTouchable";
import { StackDataType } from "../../../interfaces/stack-navigation-data.type";
import { PizzaNavigationData } from "../SinglePizza/SinglePizza";
import { routePropsTypes } from "../../../interfaces/route-props-data.type";
import { DrawerScreenProps } from "@react-navigation/drawer";

export default function Home({ navigation }: HomeProps) {
    const [products, setProducts] = useState<ProductInterface[]>([]),
        [isRefreshing, setIsRefreshing] = useState<boolean>(false),
        [isListUpdatedOnEnd, setIsListUpdatedOnEnd] = useState<boolean>(false),
        [isListRefreshed, setIsListRefreshed] = useState<boolean>(false),
        [searchRequest, setSearchRequest] = useState<string>(''),
        { filtersState } = useContext(FiltersContext),
        navigationHook = useNavigation<StackDataType<PizzaNavigationData>>();

    useEffect(() => {
        setProducts(productsArray)
    }, [])

    useEffect(() => {
        toFilterProductsBySearchRequest()
    }, [filtersState, searchRequest])

    const isLastElementInProductsArray = (index: number): boolean => {
        return index === products.length - 1
    },

    toFilterProductsBySearchRequest = () => {  
        let productsBase: ProductInterface[] = isListRefreshed ? productsOnRefresh : productsArray,
            updatedProducts = isListUpdatedOnEnd ? [...productsBase, ...extraProducts] : productsBase;
        
        if (filtersState?.isNew) {
            updatedProducts = updatedProducts.filter(el => el.isNew)
        }

        if (searchRequest) {
            updatedProducts = updatedProducts.filter(el => {
                const requestInLowerCase = searchRequest.toLowerCase()
    
                return (el.name.toLowerCase() + el.desc.toLowerCase()).includes(requestInLowerCase)
            })
    
        }

        setProducts(updatedProducts)
    },

    toActOnRequest = (): void => {
        if (searchRequest) {
            toFilterProductsBySearchRequest()
        }
    },

    updateProductsList = (): void => {
        if (isListUpdatedOnEnd || !products.length) return
        
        setIsListUpdatedOnEnd(true)
        setProducts(prev => [...prev, ...extraProducts])
        toActOnRequest()
    },

    onRefresh = (): void => {
        if (isListRefreshed) return

        setIsRefreshing(true)

        setTimeout(() => {
            setIsListRefreshed(true)
            setProducts(productsOnRefresh)
            setIsListUpdatedOnEnd(false)
            setIsRefreshing(false);
            toActOnRequest()
        }, 3000);
    },
    
    onPizzaClick = (pizza: ProductInterface): void => {
        navigationHook.navigate(RoutesConstants.singlePizzaScreen, {
            pizza
        })
    },
    
    toToggleDrawer = (): void => {
        navigation.toggleDrawer()
    };

    return (
        <View style={HomeStyles.wrap}>
            <CustomTouchable style={HomeStyles.drawer_button} onPress={toToggleDrawer}>
                <Text>Open me</Text>
            </CustomTouchable>
            <>
                <Filters onRequestInput={setSearchRequest}/>
                <FlatList style={HomeStyles.home}
                    data={products}
                    renderItem={({item, index}) => {
                        return (
                            <CustomTouchable 
                                    style={
                                        !isLastElementInProductsArray(index)
                                            ? HomeStyles.product__margin_wrapper
                                            : null
                                    }
                                    onPress={() => onPizzaClick(item)}
                                    withoutFeedback>
                                <Product data={item}/>
                            </CustomTouchable>
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
            </>
        </View>
    )
}


type HomeProps = DrawerScreenProps<routePropsTypes, RoutesConstants.homeScreen, 'MainStack'>