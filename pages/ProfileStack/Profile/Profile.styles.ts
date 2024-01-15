import { StyleSheet} from 'react-native';
import { MyPalette } from '../../../shared/colors/MyPalette';

export const ProfileStyles = StyleSheet.create({
    wrap: {
        paddingTop: 60,
        paddingBottom: 30,
        paddingHorizontal: 40,
        position: 'relative',
        height: '100%',
        display: 'flex',
        gap: 20
    },

    profile_pic: {
        height: 200,
        width: 200,
        borderRadius: 100,
        backgroundColor: MyPalette.blackTransparent,
        alignSelf: 'center'
    },

    title: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 35
    },

    field: {
        display: 'flex',
        flexDirection: "row",
        gap: 5
    },

    fieldTitle: {
        fontWeight: 'bold',
        fontSize: 25
    },

    fieldContent: {
        fontSize: 25
    },

    button: {
        backgroundColor: MyPalette.lightBlue,
        paddingVertical: 7,
        paddingHorizontal: 15,
    },

    button_text: {
        fontSize: 18
    },

    button_wrap: {
        borderRadius: 10,
        overflow: 'hidden',
        position: 'absolute',
        top: 20,
        right: 20
    }
});