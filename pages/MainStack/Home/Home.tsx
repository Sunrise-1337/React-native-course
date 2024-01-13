import { useEffect, useState, useMemo } from "react";
import { Text, RefreshControl, View } from "react-native";
import { ProductModel } from "../../../models/products.model";
import { extraProducts, productsArray, productsOnRefresh } from "../../../server-mock/products.mock";
import Product from "./components/Product/Product";
import { HomeStyles } from "./Home.styles";
import { Filters } from "./components/Filters/Filters";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { RoutesConstants } from "../../../constants/routes.constants";
import { CustomTouchable } from "../../../shared/components/CustomTouchable/CustomTouchable";
import { StackDataType } from "../../../interfaces/stack-navigation-data.type";
import { PizzaNavigationData } from "../SinglePizza/SinglePizza";
import { routePropsTypes } from "../../../interfaces/route-props-data.type";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { isLastElementInArray } from "../../../helper/helper";
import { FlatListStyles } from "../../../shared/styles/FlatList.styles";
import Animated from "react-native-reanimated";
import { useAnimatedHeader } from "../../../hooks/useAnimatedHeader";
import FiltersStore from "../../../stores/FiltersStore";
import { observer } from "mobx-react";

function Home({ navigation }: HomeProps) {
    const [products, setProducts] = useState<ProductModel[]>([]),
        [isRefreshing, setIsRefreshing] = useState<boolean>(false),
        [isListUpdatedOnEnd, setIsListUpdatedOnEnd] = useState<boolean>(false),
        [isListRefreshed, setIsListRefreshed] = useState<boolean>(false),
        [searchRequest, setSearchRequest] = useState<string>(''),
        navigationHook = useNavigation<StackDataType<PizzaNavigationData>>(),
        [scrollHandlerY, animatedHeaderStyle] = useAnimatedHeader();

    let productsToDisplay: ProductModel[];

    useEffect(() => {
        setProducts(productsArray);
    }, [])

    productsToDisplay = useMemo(() => {
        let productsBase: ProductModel[] = isListRefreshed ? productsOnRefresh : productsArray,
            updatedProducts = isListUpdatedOnEnd ? [...productsBase, ...extraProducts] : productsBase;
        
        if (FiltersStore.filters.isNew) {
            updatedProducts = updatedProducts.filter(el => el.isNew)
        }

        if (searchRequest) {
            updatedProducts = updatedProducts.filter(el => {
                const requestInLowerCase = searchRequest.toLowerCase()
    
                return (el.name.toLowerCase() + el.desc.toLowerCase()).includes(requestInLowerCase)
            })
    
        }

        return updatedProducts
    }, [FiltersStore.filters, searchRequest, products])

    const updateProductsList = (): void => {
        if (isListUpdatedOnEnd || !products.length) return
        
        setIsListUpdatedOnEnd(true)
        setProducts(prev => [...prev, ...extraProducts])
    },

    onRefresh = (): void => {
        if (isListRefreshed) return

        setIsRefreshing(true)

        setTimeout(() => {
            setIsListRefreshed(true)
            setProducts(productsOnRefresh)
            setIsListUpdatedOnEnd(false)
            setIsRefreshing(false);
        }, 3000);
    },
    
    onPizzaClick = (pizza: ProductModel): void => {
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
            <Animated.FlatList style={FlatListStyles.wrap}
                data={productsToDisplay}
                renderItem={({item, index}) => {
                    return (
                        <CustomTouchable 
                                style={
                                    !isLastElementInArray(index, productsToDisplay)
                                        ? FlatListStyles.element__margin_wrapper
                                        : null
                                }
                                onPress={() => onPizzaClick(item)}
                                withoutFeedback>
                            <Product data={item}/>
                        </CustomTouchable>
                    )
                }}
                ListHeaderComponent={
                    <Animated.View style={animatedHeaderStyle}>
                        <Filters onRequestInput={setSearchRequest}/>
                    </Animated.View>
                }
                ListEmptyComponent={() => <Text>No results</Text>}
                contentContainerStyle={FlatListStyles.element__wrapper}
                keyExtractor={item => '' + item.id}
                onEndReached={() => updateProductsList()}
                onScroll={scrollHandlerY}
                refreshControl={
                    <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
                }
            />
        </View>
    )
}

export default observer(Home)

type HomeProps = DrawerScreenProps<routePropsTypes, RoutesConstants.homeScreen, 'MainStack'>