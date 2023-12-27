import {StyleSheet} from 'react-native';
import { MyPalette } from '../../../shared/colors/MyPalette';

export const CartTabStyles = StyleSheet.create({
    wrap: {
        position: 'relative',
        height: '100%',
    },

    badge: {
        height: 15,
        width: 15,
        borderRadius: 50,
        backgroundColor: MyPalette.red,
        position: 'absolute',
        top: '-10%',
        right: '-10%',
        zIndex: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    badge_text: {
        fontSize: 10,
        color: MyPalette.white
    }
});