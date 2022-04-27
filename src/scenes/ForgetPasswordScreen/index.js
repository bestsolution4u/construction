import {verticalScale, scale} from '../../Utils/scaling';
import styles from './style';
import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import InputView from './InputView';
import PasswordResetSuccessfully from '../ForgetPasswordScreen/PasswordResetSuccessfully';
import {FlashMessageOnModal} from '../../Utils/alerts';

const ForgetPasswordScreen = props => {
  const [isModalVisible, setModalVisible] = useState(props.isModalVisible);
  const [isSucessModalVisible, setSuccessModalVisible] = useState(false);

  const flashRef = React.createRef();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const togglePasswordSuccessfulModal = () => {
    setSuccessModalVisible(true);
  };

  const showSuccessMessage = (message, description) => {
    flashRef.current.showMessage({
      message: message,
      description: description,
      type: 'success',
      duration: 3000,
    });
  };

  const showErrorMessage = (message, description) => {
    flashRef.current.showMessage({
      message: message,
      description: description,
      type: 'danger',
      duration: 3000,
    });
  };

  return (
    <Modal style={styles.modalView} isVisible={isModalVisible}>
      <TouchableOpacity style={styles.upperView} onPress={props.toggleModal}>
        <View style={styles.iconView}>
          <TouchableOpacity
            onPress={() => {
              toggleModal();
            }}
            style={styles.icon}>
            <Image
              style={{
                height: verticalScale(14.9),
                width: scale(14.9),
              }}
              source={require('../../assets/images/np_x.png')}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      <InputView
        onPress={togglePasswordSuccessfulModal}
        onSuccessMessage={(message, description) =>
          showSuccessMessage(message, description)
        }
        onErrorMessage={(message, description) =>
          showErrorMessage(message, description)
        }
      />
      {isSucessModalVisible && (
        <PasswordResetSuccessfully toggleModal={toggleModal} />
      )}
      <FlashMessageOnModal ref={flashRef} />
    </Modal>
  );
};

export default ForgetPasswordScreen;
