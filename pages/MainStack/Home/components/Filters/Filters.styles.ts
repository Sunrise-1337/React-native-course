import { StyleSheet } from "react-native"
import { MyPalette } from "../../../../../shared/colors/MyPalette";

export const FiltersStyle = StyleSheet.create({
    filter: {
        height: 60,
        paddingHorizontal: 15,
        paddingVertical: 15,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        position: 'relative'
    },

    logo: {
        paddingLeft: 20,
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    },

    logo_text: {
        fontStyle: 'italic',
        fontSize: 25,
    },

    icon_group: {
        display: 'flex',
        flexDirection: 'row'
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