import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RoutesConstants } from "../../constants/routes.constants"
import Home from "../../pages/MainStack/Home/Home";
import SinglePizza from "../../pages/MainStack/SinglePizza/SinglePizza";
import { AppStyles } from "../../App.styles";
import { PromotionsModal } from "../../pages/MainStack/PromotionsModal/PromotionsModal";

const Stack = createNativeStackNavigator();

export const MainStack = () => {
    return (
        <Stack.Navigator
              screenOptions={{
                headerShown: false,
                contentStyle: AppStyles.stackWrapper
              }}
              initialRouteName={RoutesConstants.homeScreen}>
            <Stack.Screen name={RoutesConstants.homeScreen} component={Home} />
            <Stack.Screen name={RoutesConstants.singlePizzaScreen} component={SinglePizza} />
            <Stack.Screen name={RoutesConstants.promotions} component={PromotionsModal} 
                  options={() => ({
                    presentation: 'containedTransparentModal',
                    animation:"slide_from_bottom",
                  })} />
        </Stack.Navigator>
    )
}