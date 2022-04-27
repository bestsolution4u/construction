import { StyleSheet } from 'react-native';
import { verticalScale, scale } from '../../Utils/scaling';

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        height: verticalScale(70),
        width: '100%',
        elevation: 10,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF'
    },
    header_left: {
        width: 'auto',
        height: '100%',
        paddingHorizontal: scale(20),
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'row',
        paddingVertical: verticalScale(15),

    },
    np_arrow_header: {
        height: verticalScale(17),
        width: scale(9)
    },
    main_content: {
        flex: 1,
    },
    search_view: {
        height: verticalScale(130),
        width: '100%',
        paddingVertical: verticalScale(20),
        borderBottomColor: '#A2A2A2',
        borderBottomWidth: 0.2
    },
    search_text: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: verticalScale(15)

    },
    header_title: {
        color: '#000000',
        fontSize: 24,
        fontWeight: 'bold',
        left: 20,
        alignSelf: 'center'
    },
    view_btn: {
        height: verticalScale(100),
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: scale(20),
    },
    btn_assign: {
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 20,
        backgroundColor: "#0B47BB",
        width: '100%',
        elevation: 0,
        borderRadius: verticalScale(5)
    },
    btn_assign_text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: verticalScale(16)
    }
});
export default style;