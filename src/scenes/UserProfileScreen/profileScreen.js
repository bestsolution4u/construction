import {verticalScale, scale} from '..//../Utils/scaling';
import styles from './style';
import React, {useEffect, useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import Modal from 'react-native-modal';
import CardContainer from '../../Components/Common/CardContainer';
import {Button} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import * as authActions from '../../redux/actions/authActions';
import moment from 'moment';
import {successMessage, errorMessage} from '../../Utils/alerts';
import {getData, setData} from '../../redux/utils/storage';

const UserProfile = props => {
  const [imgUrl, setImgUrl] = useState(undefined);
  const [modalSignout, toggleModalSignout] = useState(false);

  const onHideModal = () => {
    toggleModalSignout();
  };

  useEffect(() => {
    getData('User').then(user => setImgUrl(user.attributes.avatar));
    props.navigation.setParams({showModal: ShowSignoutModal});
  }, []);

  const ShowSignoutModal = () => {
    toggleModalSignout(true);
  };

  const addPicture = () => {
    ImagePicker.showImagePicker(
      {noData: true, mediaType: 'photo', quality: 0.2},
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          const formData = new FormData();
          formData.append('avatar', {
            uri: response.uri,
            type: 'image/jpeg',
            name: `${moment().unix()}.jpg`,
          });
          props.authActions.updateProfileEmployee({
            params: formData,
            onSuccess: user => {
              successMessage({
                message: 'Profile picture updated successfully.',
              });
              setData('User', user);
              setImgUrl(user.attributes.avatar);
            },
            onFail: error => errorMessage({message: error.errorMessage}),
          });
        }
      },
    );
  };

  const onHandleSignOut = () => {
    toggleModalSignout(false);
    props.authActions.signOut({
      onSuccess: () => {
        AsyncStorage.clear();
        props.navigation.navigate('Auth');
      },
      onFail: error => errorMessage({message: error.errorMessage}),
    });
  };

  return (
    <View style={styles.userProfile}>
      <View style={styles.changePicture}>
        <Image
          source={{uri: imgUrl}}
          style={{
            height: scale(60),
            width: scale(60),
            marginBottom: 10,
            borderRadius: scale(60 / 2),
          }}
        />
        <TouchableOpacity
          onPress={() => {
            addPicture();
          }}>
          <Text style={styles.changePictureText}>
            Change Picture
            <Image
              source={require('../../assets/images/np_arrow.png')}
              style={{
                marginLeft: 5,
                height: 11,
                width: 8,
              }}
            />
          </Text>
        </TouchableOpacity>
      </View>
      <Modal
        style={{margin: 0, flex: 1, paddingHorizontal: scale(15)}}
        onBackdropPress={() => onHideModal('signout')}
        isVisible={modalSignout}>
        <CardContainer style={[styles.modal_sentemail_container]}>
          <View style={styles.modal_signout_text_container}>
            <View style={[styles.modal_signout_view_text, {paddingRight: 0}]}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: verticalScale(18),
                  fontWeight: 'bold',
                  marginBottom: verticalScale(10),
                  textAlign: 'left',
                }}>
                Are you sure you want to sign out?
              </Text>
            </View>
            <View style={styles.modal_signout_view_text}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: verticalScale(18),
                  textAlign: 'left',
                }}>
                Signing out will exit you from this account.
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 'auto',
              width: '100%',
              paddingVertical: verticalScale(10),
            }}>
            <Button
              onPress={onHandleSignOut}
              style={styles.modal_signout_button}>
              <Text
                style={[styles.modal_signout_text_button, {color: '#FFFFFF'}]}>
                Signout
              </Text>
            </Button>
            <Button
              onPress={() => onHideModal()}
              style={[
                styles.modal_signout_button,
                {backgroundColor: 'transparent', top: verticalScale(10)},
              ]}>
              <Text style={styles.modal_signout_text_button}>Cancel</Text>
            </Button>
          </View>
        </CardContainer>
      </Modal>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authActions: bindActionCreators(authActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
