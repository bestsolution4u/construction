import {verticalScale, moderateScale, scale} from '../../../Utils/scaling';
import styles from './style';
import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';

export default class PasswordRessetSuccesfully extends Component {
  state = {
    isModalVisible: true,
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  render() {
    return (
      <Modal
        animationIn={'fadeInUp'}
        onBackButtonPress={() => {
          this.setState({isModalVisible: false});
        }}
        style={styles.modalView}
        isVisible={this.state.isModalVisible}>
        <View style={styles.ressetpwView}>
          <View style={styles.viewIcon}>
            <Image
              style={{
                height: verticalScale(32),
                width: scale(48.2),
              }}
              source={require('../PasswordResetSuccessfully/images/icon.png')}
            />
          </View>
          <View style={styles.viewPassword}>
            <Text style={styles.textPassword}> Password Reset</Text>
          </View>
          <View style={styles.newPassword}>
            <Text style={styles.newPasswordText}>
              We've emailed you a new password
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              this.toggleModal();
              this.props.toggleModal();
            }}
            style={styles.button}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}
