import { verticalScale, moderateScale, scale } from "../../Utils/scaling";
import styles from './style';
import React, { Component } from 'react';
import { Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";



export default class PasswordRessetSuccesfully extends Component {
    state = {
        isModalVisible: true
    };

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text onPress={this.toggleModal} style={{ fontSize: 24 }}>Click </Text>
                <Modal onBackButtonPress={() => { this.setState({ isModalVisible: !this.state.isModalVisible }) }} style={styles.modal} isVisible={this.state.isModalVisible}>
                    <View style={styles.modalView}>
                        <View style={styles.iconView}>
                            <Image style={{
                                height: verticalScale(32),
                                width: scale(48.2),
                            }} source={require('../../assets/images/icon_message.png')} />
                        </View>
                        <Text style={styles.pwResset}>Password Reset</Text>
                        <Text style={styles.description}>We've emailed you a new password</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText} onPress={this.toggleModal}>Close</Text>
                        </TouchableOpacity>    
                    </View>
                </Modal>


            </View>
        );
    }
}