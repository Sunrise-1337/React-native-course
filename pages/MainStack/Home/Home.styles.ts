import { Platform, StatusBar, StyleSheet} from 'react-native';

export const HomeStyles = StyleSheet.create({
    home: {
        flex: 1,
        width: '100%',
        display: 'flex',
        paddingHorizontal: 20,
    },

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
        backgroundColor: 'red',
        elevation: 20,
        zIndex: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    product__wrapper: {
        paddingVertical: 20
    },

    product__margin_wrapper: {
        marginBottom: 30
    }
});