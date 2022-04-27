import { RNCamera as Camera } from 'react-native-camera';
import React, { Component } from "react";
import { View, TouchableHighlight, Image, Text, TouchableOpacity } from 'react-native';
import { Footer, Left, Right, Body } from "native-base";
import style from './style'
import { verticalScale, scale } from '../../Utils/scaling';
import ImagePicker from 'react-native-image-picker';

export default class CameraPoiting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            path: null,
            photo: null,
            type: Camera.Constants.Type.back
        };
    }

    takePicture = async () => {
        try {
            const data = await this.camera.takePictureAsync();
            this.setState({ path: data.uri });
            // this.props.updateImage(data.uri);
            // console.log('Path to image: ' + data.uri);
        } catch (err) {
            console.log('err: ', err);
        }
    };

    handleChoosePhoto = () => {
        const options = {
            noData: true,
            quality: 0.2,
        };
        ImagePicker.launchImageLibrary(options, response => {
            if (response.uri) {
                this.setState({ path: response.uri });
            }
        });
    };

    renderCamera() {
        return (
            <Camera
                type={this.state.type}
                ref={(cam) => {
                    this.camera = cam;
                }}
                style={style.preview}
                flashMode={Camera.Constants.FlashMode.off}
                captureAudio={false}>

                <View style={style.HeaderCamera}>
                    <TouchableOpacity style={{ paddingLeft: 40, justifyContent: 'center', marginTop: '5%' }}
                        onPress={() => this.setState({ path: null })}>
                        <Image source={require('../../assets/images/X.png')} style={{ height: verticalScale(14.9), width: scale(14.9) }} />
                    </TouchableOpacity>
                </View>

                <Footer style={style.bottom}>
                    <Left style={{ ...style.bottomItemContainer, flex: 1, paddingLeft: 50 }}>
                        <TouchableOpacity onPress={this.handleChoosePhoto} >
                            <Image source={require('../../assets/images/AddImg.png')} />
                        </TouchableOpacity>
                    </Left>
                    <Body
                        style={{
                            ...style.bottomItemContainer, flex: 2, flexDirection: "column",
                        }}>
                        <TouchableHighlight style={style.capture} onPress={this.takePicture.bind(this)} underlayColor="rgba(255, 255, 255, 0.5)" >
                            <View />
                        </TouchableHighlight>
                    </Body>

                    <Right style={{ ...style.bottomItemContainer, flex: 1, paddingRight: 50 }}>
                        <TouchableOpacity onPress={() => { this.setState({ type: this.state.type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back }) }}>
                            <Image source={require('../../assets/images/Rotate.png')} />
                        </TouchableOpacity>
                    </Right>
                </Footer>
            </Camera>
        );
    }

    renderImage() {
        return (
            <View style={{ flex: 1, }}>
                <View >
                    <TouchableOpacity style={style.HeaderImage} onPress={() => this.setState({ path: null })}>
                        <Image source={require('../../assets/images/X.png')} style={{ height: verticalScale(14.9), width: scale(14.9) }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, }}>
                    <Image source={{ uri: this.state.path }} style={style.preview} />
                </View>

                <Footer style={style.bottom} >
                    <Left style={{ ...style.bottomItemContainer, flex: 1, paddingLeft: 30 }}>

                        <TouchableOpacity onPress={() => this.setState({ path: null })} >
                            <Text style={style.txtRetake}>Retake</Text>

                        </TouchableOpacity>
                    </Left>
                    <Body
                        style={{ ...style.bottomItemContainer, flex: 2, flexDirection: "column", }}>
                    </Body>
                    <Right style={{ ...style.bottomItemContainer, flex: 1, }}>
                        <TouchableOpacity style={style.buttonUsePicture} onPress={() => { this.props.navigation.navigate("UserPictureScreen") }} >
                            <Text style={style.txtUsePicture}>Use Picture</Text>
                        </TouchableOpacity>
                    </Right>
                </Footer>
            </View >
        );
    }

    // renderLibrary() {
    //     const { photo } = this.state;
    //     return (
    //         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //             {photo && (
    //                 <Image source={{ uri: photo.uri }} style={{ width: 300, height: 300 }} />
    //             )}
    //         </View>
    //     );
    // }

    render() {
        return (
            <View style={style.container}>
                {this.state.path ? this.renderImage() : this.renderCamera()}
            </View>
        );
    }
}

