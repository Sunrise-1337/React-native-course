import { StyleSheet } from "react-native"
import { MyPalette } from "../../colors/MyPalette";

export const BuyButtonStyle = StyleSheet.create({
    purchase: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: MyPalette.lightBlue,
        padding: 6,
        borderRadius: 10,
    },
    purchase_wrap: {
        overflow: 'hidden',
        borderRadius: 10,
    },
    purchase__text: {
        fontSize: 15
    },
    purchase__img: {
        marginLeft: 3,
        width: 20,
        height: 20
    },

    counter_display: {
        minWidth: 10,
        textAlign: 'center',
        verticalAlign: 'middle'
    },

    stepper_button: {
        height: 20,
        width: 18,
        textAlign: 'center',
        verticalAlign: 'middle',
        color: MyPalette.white,
        fontSize: 15
    }
});