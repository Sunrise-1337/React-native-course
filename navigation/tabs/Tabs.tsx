import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MySettings } from "../../pages/MySettings/MySettings";
import { TabIcon } from "./TabIcon/TabIcon";
import { ImageSourcePropType } from "react-native";
import { ReactNode } from "react";
import { Drawer } from "../drawer/Drawer";

import pizzaIcon from '../../assets/images/tabIcons/pizzaIcon.png'
import pizzaIconFocused from '../../assets/images/tabIcons/pizzaIconFocused.png'

import settingsIcon from '../../assets/images/tabIcons/settingsIcon.png'
import settingsIconFocused from '../../assets/images/tabIcons/settingsIconFocused.png'

import cartIcon from '../../assets/images/tabIcons/cartIcon.png'
import cartIconFocused from '../../assets/images/tabIcons/cartIconFocused.png'

import profileIcon from '../../assets/images/tabIcons/profileIcon.png'
import profileIconFocused from '../../assets/images/tabIcons/profileIconFocused.png'


import { CartTab } from "./CartTab/CartTab";
import { Cart } from "../../pages/Cart/Cart";
import { Profile } from "../../pages/ProfileStack/Profile/Profile";
import ProfileStack from "../stacks/ProfileStack";

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    const getTabOfCertainType = 
        (isFocused: boolean, icon: ImageSourcePropType, focusedIcon: ImageSourcePropType): ReactNode => 
    {
        const image = isFocused ? focusedIcon : icon

        return <TabIcon source={image} width={30} height={30} />
    }

    
    const getCartTabOfCertainType = 
        (isFocused: boolean): ReactNode => 
    {
        const image = isFocused ? cartIconFocused : cartIcon

        return <CartTab source={image} width={30} height={30} />
    }

    return (
        <Tab.Navigator
                screenOptions={{
                    headerShown: false
                }}>
            <Tab.Screen name="Home"
                        component={Drawer}
                        options={{
                            tabBarIcon({focused}) {
                                return getTabOfCertainType(focused, pizzaIcon, pizzaIconFocused)
                            },
                        }}/>
            <Tab.Screen name="Cart"
                        component={Cart}
                        options={{
                            tabBarIcon({focused}) {
                                return getCartTabOfCertainType(focused)
                            },
                        }}/>
            <Tab.Screen name="Settings"
                        component={MySettings}
                        options={{
                            tabBarIcon({focused}) {
                                return getTabOfCertainType(focused, settingsIcon, settingsIconFocused)
                            },
                        }}>
            </Tab.Screen>
            <Tab.Screen name="Profile"
                        component={ProfileStack}
                        options={{
                            tabBarIcon({focused}) {
                                return getTabOfCertainType(focused, profileIcon, profileIconFocused)
                            },
                        }}>
            </Tab.Screen>
        </Tab.Navigator>
    )
}