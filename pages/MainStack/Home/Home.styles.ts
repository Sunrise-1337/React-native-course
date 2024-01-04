import { StyleSheet} from 'react-native';
import { MyPalette } from '../../../shared/colors/MyPalette';

export const HomeStyles = StyleSheet.create({
    wrap: {
        position: 'relative',
        height: '100%',
    },

    drawer_button: {
        position: 'absolute',
        left: 0,
        top: '50%',
        height: 50,
        width: 50,
        backgroundColor: MyPalette.red,
        elevation: 20,
        zIndex: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
});