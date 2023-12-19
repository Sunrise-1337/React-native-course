import { StyleSheet } from "react-native"
import { MyPalette } from "../../../../../shared/colors/MyPalette";

export const SliderStyle = StyleSheet.create({
    slide: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    slide_image: {
        width: '80%',
        height: '100%'
    },

    dots_container: {
        height: 100,
        display: 'flex',
        gap: 5,
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 60,
    },
                        
    dot: {
        backgroundColor: MyPalette.lightGray,
        width: 20,
        height: 20,
        borderRadius: 20
    },
    
    active_dot: {
        backgroundColor: MyPalette.blackTransparent
    },

    slider_container: {
        alignItems: 'center',
        position: 'relative',
        height: '80%'
    }
});