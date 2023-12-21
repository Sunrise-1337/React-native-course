import { Platform, StatusBar, StyleSheet} from 'react-native';
import { MyPalette } from './shared/colors/MyPalette';

export const AppStyles = StyleSheet.create({
    container: {
        marginTop: (Platform.OS === "android" ? StatusBar.currentHeight : 0)
    },

    stackWrapper: {
        backgroundColor: MyPalette.white
    },

    placeholder_wrap: {
        height: '100%',
        position: 'absolute',
        width: '100%',
        backgroundColor: 'white',
        top: 0,
        bottom: 0,
        right: 0, 
        left: 0,
        zIndex: 100,
        elevation: 100
    },

    placeholder_image: {
        height: '100%',
    }
});