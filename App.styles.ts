import { Platform, StatusBar, StyleSheet} from 'react-native';
import { MyPalette } from './shared/colors/MyPalette';

export const AppStyles = StyleSheet.create({
    container: {
        marginTop: (Platform.OS === "android" ? StatusBar.currentHeight : 0)
    },

    stackWrapper: {
        backgroundColor: MyPalette.white
    }
});