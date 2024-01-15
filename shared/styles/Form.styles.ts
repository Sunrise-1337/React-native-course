import { StyleSheet} from 'react-native';
import { MyPalette } from '../colors/MyPalette';

export const FormStyles = StyleSheet.create({
    wrap: {
        position: 'relative',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },

    input: {
        width: '80%',
        backgroundColor: MyPalette.gray,
        fontSize: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
    },

    passwordInput: {
        width: '100%'
    },

    passwordWrap: {
        width: '80%',
        position: 'relative',
    },

    passwordVisibility: {
        position: 'absolute',
        right: 10,
        top: 5
    },
    
    passwordToggler: {
        width: 30,
        height: 30
    },

    button: {
        backgroundColor: MyPalette.blackTransparent,
        paddingVertical: 7,
        paddingHorizontal: 15,
    },

    button_text: {
        fontSize: 18
    },

    button_wrap: {
        borderRadius: 10,
        overflow: 'hidden'
    }
});