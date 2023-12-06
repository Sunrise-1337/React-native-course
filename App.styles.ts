import { Platform, StatusBar, StyleSheet} from 'react-native';
import { MyPalette } from './shared/colors/MyPalette';

export const AppStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: MyPalette.white,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: (Platform.OS === "android" ? StatusBar.currentHeight : 0)
    },
});