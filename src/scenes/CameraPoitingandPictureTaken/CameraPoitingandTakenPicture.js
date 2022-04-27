import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import style from './style'
import { verticalScale, scale } from '../../Utils/scaling'
export default class CameraPoitingandTakenPicture extends Component {
    render() {
        return (
            <View style={style.container}>
                <View style={style.header}>
                    <TouchableOpacity style={{ justifyContent: 'center', marginTop: '5%', marginLeft: '5%' }}
                        onPress={this.Xbutton}
                    >
                        <Image source={require('../../assets/images/X.png')} />
                    </TouchableOpacity>
                </View>
                <View style={style.midel}>
                    <Image style={{ height: verticalScale(736), width: scale(400) }} source={require('../../assets/images/takepic.png')} />
                </View>
                <View style={style.footer}>
                    <TouchableOpacity
                        style={style.UsePicture}
                    >
                        <Text style={style.txtUsePicture}>Use Picture</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.btnRetake}>
                        <Text style={style.txtRetake}>Retake</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )

    }
}
