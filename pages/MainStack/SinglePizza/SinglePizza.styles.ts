import { StyleSheet} from 'react-native';

export const SinglePizzaStyles = StyleSheet.create({
    wrap: {
        alignItems: 'center',
        paddingVertical: 50
    },

    image: {
        width: 250, 
        height: 250,
        marginBottom: 30
    },

    title: {
        marginBottom: 15,
        fontSize: 30,
        fontWeight: 'bold'
    },

    description: {
        width: '95%',
        textAlign: 'left',
        fontSize: 20,
    }
});