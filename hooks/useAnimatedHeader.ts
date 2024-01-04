import { NativeScrollEvent, NativeSyntheticEvent } from "react-native";
import { interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from "react-native-reanimated";

export const useAnimatedHeader = (): AnimatedHeaderExportedValue => {
    const scrollValueY = useSharedValue(0),

    scrollHandlerY = useAnimatedScrollHandler((event: NativeScrollEvent) => {
        scrollValueY.value = event.contentOffset.y
    }),
    
    animatedHeaderStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(scrollValueY.value, [0, 35], [1, 0])
        }
    });
    
    return [
        scrollHandlerY,
        animatedHeaderStyle
    ]
    
}

type AnimatedHeaderExportedValue = [OnScrollFunc, HeaderStyleType]

type OnScrollFunc = (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
type HeaderStyleType = {
    opacity: number
};