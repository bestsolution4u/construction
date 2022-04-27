import {verticalScale, moderateScale, scale} from '../../../Utils/scaling';
import styles from './style';
import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import Modal from 'react-native-modal';
import TextArea from './textArea';
import ImageComponent from './imageComponent';
import ImagePicker from 'react-native-image-picker';
import VerifyYourWorkDescription from '../../VerifyYourWorkDescription/index';
import {FlashMessageOnModal} from '../../../Utils/alerts';

const VerifyYourWork = props => {
  const [avatarSource, setAvatarSource] = useState([]);
  const [marginLeft, setMarginLeft] = useState(0);
  const [description, setDescription] = useState('');
  const [showDescModal, setShowDescModal] = useState(false);

  const flashRef = React.createRef();

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

  const addPicture = () => {
    ImagePicker.showImagePicker(
      {noData: true, mediaType: 'photo'},
      response => {
        // console.log('Response = ', response);

        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          const source = {uri: response.uri};

          setAvatarSource([...avatarSource, source]);
          setMarginLeft(20);
        }
      },
    );
  };

  const showKeyboardDescription = () => {
    setShowDescModal(true);
  };

  return (
    <Modal
      onBackButtonPress={() => {
        props.onHideModal();
      }}
      style={styles.modalView}
      isVisible={props.isModalVisible}>
      <TouchableOpacity
        style={styles.upperView}
        onPress={() => {
          props.onHideModal();
        }}>
        <View style={styles.iconView}>
          <TouchableOpacity
            onPress={() => {
              props.onHideModal();
            }}
            style={styles.icon}>
            <Image
              style={{
                height: scale(14),
                width: scale(14),
                tintColor: 'black',
                borderRadius: scale(7),
              }}
              source={require('../../../assets/images/np_x.png')}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      <View style={styles.fullModal}>
        <View style={styles.middleView}>
          <Text style={styles.verifyText}>Verify Your Work</Text>
          <ScrollView horizontal={true} style={{marginLeft: scale(marginLeft)}}>
            <TouchableOpacity
              onPress={() => addPicture()}
              style={styles.addImageIcon}>
              <Image
                style={{
                  height: verticalScale(33.9),
                  width: scale(28.6),
                  marginBottom: verticalScale(7),
                }}
                source={require('../../../assets/images/add_image_icon.png')}
              />
              <Text style={styles.iconText}>Add Images</Text>
            </TouchableOpacity>

            {avatarSource.map((img, index) => {
              return <ImageComponent key={index} imgSource={img} />;
            })}
          </ScrollView>

          <TextArea
            onClickKeyboard={() => showKeyboardDescription()}
            value={description}
          />

          <View style={styles.buttonView}>
            <TouchableOpacity
              onPress={() => {
                if (avatarSource && avatarSource.length) {
                  props.onCompleteTask(avatarSource, description);
                } else {
                  showErrorMessage(
                    'You must upload at least one image for proof of your work.',
                    '',
                  );
                }
              }}
              style={styles.button}>
              <Text style={styles.buttonText}>Complete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <VerifyYourWorkDescription
        isVisible={showDescModal}
        onHideModal={() => {
          setShowDescModal(false);
        }}
        onSave={desc => {
          setDescription(desc);
          setShowDescModal(false);
        }}
        description={description}
      />
      <FlashMessageOnModal ref={flashRef} />
    </Modal>
  );
};
export default VerifyYourWork;
