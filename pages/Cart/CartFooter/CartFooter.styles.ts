import { StyleSheet } from "react-native"
import { MyPalette } from "../../../shared/colors/MyPalette";

export const CartFooterStyles = StyleSheet.create({
    footer: {
        backgroundColor: MyPalette.white,
        borderRadius: 50,
        height: 80,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20
    },

    totalHeader: {

    },

    totalAmount: {
        fontWeight: 'bold'
    },

    left_block: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        paddingLeft: 20
    },
    
    right_block: {
    },

    button_wrapper: {
        overflow: 'hidden',
        height: 40,
        width: 120,
        borderRadius: 50,
    },

    button: {
        backgroundColor: MyPalette.gray,
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    button_text: {
        fontWeight: 'bold',
        fontSize: 15
    },
    
})