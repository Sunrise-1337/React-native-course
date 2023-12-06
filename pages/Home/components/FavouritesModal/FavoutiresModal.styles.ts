import { StyleSheet } from "react-native"
import { MyPalette } from "../../../../shared/colors/MyPalette";

export const FavouritesModalStyle = StyleSheet.create({
    close_area: {
        flex: 1,
        backgroundColor: MyPalette.blackTransparent
    },

    inner_container: {
        backgroundColor: MyPalette.gray,
        height: '50%',
        marginTop: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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