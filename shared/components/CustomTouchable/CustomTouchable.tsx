import { ReactNode } from "react";
import { Platform, Pressable, StyleProp, ViewStyle } from "react-native";
import { DeveloperConstants } from "../../../constants/developer.constants";
import { MyPalette } from "../../colors/MyPalette";

export const CustomTouchable: React.FC<TouchableProps> = ({
    onPress,
    children,
    radius,
    rippleFullCoverage,
    borderless,
    withoutFeedback,
    style
}) => {

    return (
      <Pressable 
            onPress={onPress}
            style={
                ({pressed}) => [
                    Platform.OS === 'ios' && {
                        opacity: pressed || !withoutFeedback ? 0.8 : 1,
                    },
                    {
                        overflow: 'hidden',
                    },
                    style
                ]
            }
            android_ripple={
                !withoutFeedback 
                ? {
                    color: MyPalette.rippleColor,
                    radius: rippleFullCoverage ? DeveloperConstants.absurdlyBigNumber : radius || 20,
                    borderless: borderless || true,
                    foreground: false
                }
                : {}
            }>
        {children}
      </Pressable>
    );
}

interface TouchableProps {
    children?: ReactNode,
    onPress: () => void,
    radius?: number,
    borderless?: boolean,
    rippleFullCoverage?: boolean,
    withoutFeedback?: boolean,
    style?: StyleProp<ViewStyle>,
}