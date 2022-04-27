
import { StyleSheet } from 'react-native'
import { verticalScale, width, scale, moderateScale } from '../../Utils/scaling';

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
        borderRadius: 100,
        height: verticalScale(70),
        width: scale(70),
        backgroundColor: '#0B47BB'

    },
    HeaderCamera: {
        height: verticalScale(67),
        width: scale(414),
        backgroundColor: '#F5F6FA',
        bottom: '70%',

    },
    bottom: {
        height: verticalScale(130),
        width: scale(414),
        backgroundColor: '#F5F6FA',
        opacity: 0.9
    },
    bottomImage: {
        height: verticalScale(130),
        width: scale(414),
        backgroundColor: '#F5F6FA',
        opacity: 0.9,
        marginTop: 250


    },
    HeaderImage: {
        height: verticalScale(67),
        width: scale(414),
        backgroundColor: '#F5F6FA',
        paddingLeft: 20,
        justifyContent: 'center',

    },
    txtUsePicture: {
        fontSize: moderateScale(16),
        fontFamily: 'Helevetica',
        fontWeight: 'bold',
        color: '#FFFFFF',

    },
    buttonUsePicture: {
        height: verticalScale(47),
        width: scale(108),
        backgroundColor: '#0B47BB',
        marginRight: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    txtRetake: {
        fontSize: moderateScale(16),
        fontFamily: 'Helevetica',
        fontWeight: 'bold',
        color: '#0B47BB',

    }


})

export default style;