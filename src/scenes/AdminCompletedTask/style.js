import { StyleSheet } from 'react-native'
import { verticalScale, width, scale, moderateScale } from '../../Utils/scaling';

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        borderBottomWidth: 2,
        borderBottomColor: '#00000029',
        height: verticalScale(67),
        width: '100%',
        backgroundColor: 'white',
        shadowColor: "white",
        elevation: 4
    },
    txtCompletedTasks: {
        color: '#000000',
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        fontSize: moderateScale(24),
        marginLeft: '10%',
        marginTop: 2
    },
    buttonScreenShoot: {
        marginTop: -45,
        marginLeft: '65%'
    },
    ImagePlus: {
        marginTop: -42,
        marginLeft: 23
    },

    ImageDone: {
        marginTop: -42,
        marginLeft: 23
    },

    buttonLogoScreen: {
        marginTop: -37,
        marginLeft: '80%'
    },
    ViewDown: {
        flex: 1,
        backgroundColor: 'white'
    },
    viewTxtSearchby: {
        height: '5%',
        marginLeft: '5%',
        marginTop: 15
    },
    txtSearchTasksByMembers: {
        color: '#000000',
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        fontSize: moderateScale(18),

    },
    viewInputSearch: {
        margin: 15,
        height: verticalScale(47),
        borderColor: '#A2A2A2',
        borderWidth: 0.2,
        borderRadius: 5,
    },
    InputSearch: {
        marginLeft: '4%',
        fontSize: moderateScale(16),
    },
    _viewPostone: {
        marginLeft: '4%',
    },
    txtRoofRepair: {
        color: '#000000',
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        fontSize: moderateScale(18),
    },
    txtDateOnePost: {
        color: '#0B47BB',
        fontFamily: 'Helvetica',
        fontSize: moderateScale(16),
    },
    txtRoofRepair: {
        color: '#000000',
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        fontSize: moderateScale(17),
    },
    viewTxtRoofRepair: {
        bottom: '31%',
        marginLeft: 136
    },
    viewTxtRoofRepair2: {
        bottom: '33%',
        marginLeft: 136
    },
    txtdownRoof: {
        color: '#000000',
        fontFamily: 'Helvetica',
        fontSize: moderateScale(16),
    },
    viewDate: {
        marginLeft: '4%',
        bottom: '26%',
    },

    txtLocation: {
        color: '#0B47BB',
        fontFamily: 'Helvetica',
        fontSize: moderateScale(16),
        marginTop: '3%',

    },
    viewEmailCompleted: {
        margin: 1,
        height: verticalScale(47),
        borderColor: '#A2A2A2',
        borderWidth: 0.2,
        borderRadius: 5,
        marginLeft: '5%',
        marginRight: '5%',
        bottom: '13%'

    },
    imageprofil: {
        marginLeft: '3%'
    },
    txtEmail: {
        color: '#000000',
        fontFamily: 'Helvetica',
        fontSize: moderateScale(16),
    },
    txtCompleted: {
        color: '#00A173',
        fontFamily: 'Helvetica',
        fontSize: moderateScale(14),

    },
    CompletedsmallImg: {
        bottom: '230%',
        marginLeft: '25%',

    },
    Completedsmall: {
        bottom: '310%',
        marginLeft: '25%',
    },
    doneeImg: {
        marginLeft: '42%',
        marginTop: '-20%'

    },
    txtCompleted: {
        color: '#00A173',
        fontFamily: 'Helvetica',
        fontSize: moderateScale(14),
    },




})

export default style;