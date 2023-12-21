import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MySettings } from "../../pages/MySettings/MySettings";
import { TabIcon } from "./TabIcon/TabIcon";
import { ImageSourcePropType } from "react-native";
import { ReactNode } from "react";

import pizzaIcon from '../../assets/images/tabIcons/pizzaIcon.png'
import pizzaIconFocused from '../../assets/images/tabIcons/pizzaIconFocused.png'

import settingsIcon from '../../assets/images/tabIcons/settingsIcon.png'
import settingsIconFocused from '../../assets/images/tabIcons/settingsIconFocused.png'
import { Drawer } from "../drawer/Drawer";

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    const getTabOfCertainType = 
        (isFocused: boolean, icon: ImageSourcePropType, focusedIcon: ImageSourcePropType): ReactNode => 
    {
        const image = isFocused ? focusedIcon : icon

        return <TabIcon source={image} width={20} height={20} />
    }

    return (
        <Tab.Navigator
                screenOptions={{
                    headerShown: false
                }}>
            <Tab.Screen name="HomeTab"
                        component={Drawer}
                        options={{
                            tabBarIcon({focused}) {
                                return getTabOfCertainType(focused, pizzaIcon, pizzaIconFocused)
                            },
                        }}/>
            <Tab.Screen name="SettingsTab"
                        component={MySettings}
                        options={{
                            tabBarIcon({focused}) {
                                return getTabOfCertainType(focused, settingsIcon, settingsIconFocused)
                            },
                        }}>
            </Tab.Screen>
        </Tab.Navigator>
    )
}