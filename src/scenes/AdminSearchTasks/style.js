import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 50,
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    searchBarView: {
        borderWidth: 0.3,
        flexDirection: 'row',
        marginTop: 20,
        borderColor: '#c5c5c5',
    },
    searchBarInput: {
        borderWidth: 0,
        width: '90%',
        fontSize: 20,
        paddingLeft: 10,
    },
    listView: {
        backgroundColor: '#F5F6FA',
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderColor: '#c5c5c5',
    },
    listData: {
        borderBottomWidth: 0.5,
        borderColor: '#c5c5c5',
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    profilePhoto: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },

});

export default style;
