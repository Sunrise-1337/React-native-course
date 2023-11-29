import { Platform, StatusBar, StyleSheet} from 'react-native';

export const AppStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        paddingTop: (Platform.OS === "android" ? StatusBar.currentHeight : 0) + 20
    },
});