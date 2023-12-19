import { StyleSheet } from "react-native"
import { MyPalette } from "../../../../../shared/colors/MyPalette";

export const FiltersStyle = StyleSheet.create({
    filter: {
        height: 40,
        paddingHorizontal: 15,
        paddingVertical: 5,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: 'center',
        position: 'relative'
    },

    icon: {
        height: 30,
        width: 30,
    },    
    
    icon_wrapper: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 15,
    },

    input: {
        flex: 1,
        backgroundColor: MyPalette.gray,
        borderRadius: 10,
        paddingLeft: 15,
        paddingRight: 32,
        paddingVertical: 5,
        height: 30
    },

    input_wrapper: {
        flex: 1,
        position: "relative"
    },

    input_icon: {
        height: 20,
        width: 20
    },
    
    input_icon_wrapper: {
        position: 'absolute',
        right: 7,
        top: 5,
    },
});