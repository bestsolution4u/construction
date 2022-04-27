import { StyleSheet } from 'react-native'
import { verticalScale, width, scale, moderateScale, height } from '../../Utils/scaling';

const style = StyleSheet.create({
    container: {
        flex: 1,

    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    header: {
        backgroundColor: 'white',
        height: verticalScale(67),
        width: scale(414),
        opacity: 0.9
    },
    midel: {
        height: '70%',

    },
    footer: {
        backgroundColor: 'white',
        height: verticalScale(130),
        width: scale(414),
        opacity: 0.9, justifyContent: 'center',
        alignItems: 'center'

    },
    UsePicture: {
        height: verticalScale(47),
        width: scale(108),
        marginLeft: 180,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0B47BB',
        borderRadius: 5
    },
    txtUsePicture: {
        fontSize: moderateScale(16),
        color: 'white',
        fontFamily: 'Helvetica',
        fontWeight: 'bold'
    },
    txtRetake: {
        fontSize: moderateScale(16),
        color: '#0B47BB',
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        marginRight: 250,
        bottom: '135%',

    }


})

export default style;