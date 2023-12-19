import { StyleSheet } from "react-native"
import { MyPalette } from "../../../../../../shared/colors/MyPalette";

export const FiltersModalStyle = StyleSheet.create({
    close_area: {
        flex: 1,
        backgroundColor: MyPalette.blackTransparent
    },

    inner_container: {
        backgroundColor: MyPalette.gray,
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 40,
    },

    filter_section:{
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        marginVertical: 20
    },

    close_button: {
        width: 'auto',
        height: 'auto',
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 15,
        backgroundColor: MyPalette.white,
        borderRadius: 10
    },
});