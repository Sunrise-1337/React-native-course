import { StyleSheet } from "react-native"
import { MyPalette } from "../../../../../shared/colors/MyPalette";

export const ProductStyles = StyleSheet.create({
    product: {
        height: 150,
        width: '98%',
        backgroundColor: MyPalette.gray,
        borderRadius: 30,
        display: 'flex',
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: MyPalette.black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity:  0.19,
        shadowRadius: 5.62,
        elevation: 6
    },
    productWrap: {
        display: "flex",
        alignItems: "center"
    },
    infoWrap: {
        display: "flex",
        alignItems: "flex-start",
        width: 200,
    },



    imageWrapper: {
        position: "relative"
    },
    productImage: {
        height: 80,
        width: 80,
    },
    favourite: {
        height: 30,
        width: 30,
    },
    new: {
        position: "absolute",
        top: -10,
        left: -10,
        height: 40,
        width: 40
    },

    price: {
        fontWeight: "bold",
        fontSize: 16
    },
    oldPrice: {
        marginLeft: 30,
        textDecorationLine: "line-through",
        fontSize: 16
    },

    title: {
        fontSize: 25
    },
    desc: {
        width: 130
    },


    topTextRow: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
        marginBottom: 10
    },
    middleTextRow: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        marginBottom: 10
    },
    bottomTextRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },

    purchase: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: MyPalette.lightBlue,
        padding: 6,
        borderRadius: 10
    },
    purchase__text: {
        fontSize: 15
    },
    purchase__img: {
        marginLeft: 3,
        width: 20,
        height: 20
    },
});