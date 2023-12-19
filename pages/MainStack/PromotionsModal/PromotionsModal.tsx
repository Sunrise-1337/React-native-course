import { Modal, View, Text } from "react-native";
import { CustomTouchable } from "../../.../../../shared/components/CustomTouchable/CustomTouchable";
import { PromotionsModalStyle } from "./PromotionsModal.styles";
import { Slider } from "./Slider/Slider";
import { promos } from "../../../.../../server-mock/promos.mock";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RoutesConstants } from "../../../constants/routes.constants";
import { RootStackParamList, StackDataType } from "../../../interfaces/stack-navigation-data.type";
import { RoutePropsData, routePropsTypes } from "../../../interfaces/route-props-data.type";

export const PromotionsModal: React.FC<FavouritesModalProps> = (navigation) => {
    

    const hideModal = (): void => {
        navigation.navigation.pop()
    }

    return (
        <View style={PromotionsModalStyle.inner_container}>
            <Slider data={promos}/>
            <View style={PromotionsModalStyle.close_button}>
                <CustomTouchable onPress={hideModal} rippleFullCoverage borderless={false}>
                    <Text>
                        Close modal
                    </Text>
                </CustomTouchable>
            </View>
        </View>
    )
}

type FavouritesModalProps = NativeStackScreenProps<routePropsTypes, RoutesConstants.promotions, 'MainStack'>