import { Text, ImageSourcePropType, View } from "react-native"
import { TabIcon } from "../TabIcon/TabIcon"
import { CartTabStyles } from "./CartTabStyles"
import { observer } from "mobx-react";
import CartStore from "../../../stores/CartStore";

export const CartTab: React.FC<CartTabProps> = observer(({source, width, height}) => {
    return (
        <View style={{
                ...CartTabStyles.wrap,
                width,
                height
            }}>
            {!!CartStore.ordersAmount && 
                <View style={CartTabStyles.badge}>
                    <Text style={CartTabStyles.badge_text}>
                        {CartStore.ordersAmount}
                    </Text>
                </View>
            }
            <TabIcon source={source} width={width} height={height} />
        </View>
    )
})

interface CartTabProps {
    source: ImageSourcePropType,
    width: number,
    height: number
}