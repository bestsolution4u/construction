import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import moment from 'moment';
import {isEmpty} from 'lodash';

import style from './style';
import ImagePicker from 'react-native-image-picker';
import InfoField from '../../../Components/Common/InfoField';
import InputModal from './modals/inputModal';
import InviteSuccessModal from './modals/inviteSuccessModal';
import SignoutModal from './modals/signoutModal';
import ChangePasswordModal from './modals/changePasswordModal';
import ChangePasswordSuccessModal from './modals/changePasswordSuccessModal';
import {signOut} from '../../../redux/actions/authActions';
import {inviteEmployeeToCompany} from '../../../redux/actions/employeeActions';
import {errorMessage} from '../../../Utils/alerts';
import {
  getCompanyProfileData,
  updateCompanyProfile,
} from '../../../redux/actions/profileActions';
import {getCompanyProfile} from '../../../redux/selectors';
import {verticalScale, scale} from '../../../Utils/scaling';
import defaultImage from '../../../assets/images/default.png';

const MyProfile = props => {
  const [modalNameKeyboard, toggleModalName] = useState(false);
  const [modalEmailKeyboard, toggleModalEmail] = useState(false);
  const [modalPasswordKeyboard, toggleModalPassword] = useState(false);
  const [modalEmailInvite, toggleModalInviteEmail] = useState(false);
  const [modalSentEmailSuccess, toggleModalSentEmailSuccess] = useState(false);
  const [modalSignout, toggleModalSignout] = useState(false);
  const [modalChangedPassword, toggleModalChangePassword] = useState(false);
  const [name, setName] = useState(
    props.companyProfile.attributes
      ? props.companyProfile.attributes.business_name
      : 'Hamati Roofing',
  );
  const [email, setEmail] = useState(
    props.companyProfile.attributes
      ? props.companyProfile.attributes.email
      : 'hamati@gmail.com',
  );
  const [currentPassword, handleCurrentPassword] = useState('');
  const [password, setPassword] = useState(currentPassword);
  const [filePath, setFilePath] = useState(
    props.companyProfile.attributes
      ? props.companyProfile.attributes.avatar
      : '',
  );
  const [emailInvite, setEmailInvite] = useState('');

  useEffect(() => {
    props.navigation.setParams({submit: onShowSignoutModal});
    props.profileActions.getCompanyProfileData({
      params: {},
      onFail: error => {
        errorMessage({message: error.errorMessage});
      },
    });
  }, []);

  useEffect(() => {
    if (filePath !== props.companyProfile.attributes.avatar) {
      updateProfile();
    }
  }, [filePath]);

  const inviteEmployee = email => {
    props.profileActions.inviteEmployeeToCompany({
      params: {email: email},
      onSuccess: () => {
        toggleModalSentEmailSuccess(true);
      },
      onFail: error => {
        errorMessage({message: error.errorMessage});
      },
    });
  };

  const convertStringToPassword = str => {
    let text = '';
    for (let i = 0; i < str.length; i++) {
      text += '*';
    }
    return text;
  };

  const onHideModal = type => {
    if (type === 'name') {
      toggleModalName(false);
      return;
    }
    if (type === 'email') {
      toggleModalEmail(false);
      return;
    }
    if (type === 'password') {
      toggleModalPassword(false);
      return;
    }
    if (type === 'emailInvite') {
      toggleModalInviteEmail(false);
      return;
    }
    if (type === 'signout') {
      toggleModalSignout(false);
      return;
    }
    if (type === 'changedpassword') {
      toggleModalChangePassword(false);
      return;
    }
  };

  const onSaveNamePress = name => {
    setName(name);
    updateProfile();
    toggleModalName(false);
  };

  const onPressSaveEmail = email => {
    setEmail(email);
    toggleModalEmail(false);
    updateProfile();
  };

  const onPressSaveEmailSend = email => {
    setEmailInvite(email);
    inviteEmployee(email);
    toggleModalInviteEmail(false);
    updateProfile();
  };

  const handlePasswordChange = password => {
    setPassword(password);
    updateProfile();
    onHideModal('password');
    onHandleProfileInfo('changedpassword');
  };
  const onShowSignoutModal = () => {
    toggleModalSignout(true);
  };
  const onHandleSignOut = () => {
    toggleModalSignout(false);
    props.profileActions.signOut({
      onSuccess: () => props.navigation.navigate('Auth'),
      onFail: () => Alert.alert('Error', 'Something went wrong'),
    });
  };

  const onHandleProfileInfo = type => {
    if (type === 'name') {
      toggleModalName(true);
      return;
    }
    if (type === 'email') {
      toggleModalEmail(true);
      return;
    }
    if (type === 'password') {
      toggleModalPassword(true);
      return;
    }
    if (type === 'emailInvite') {
      toggleModalInviteEmail(true);
      return;
    }
    if (type === 'signout') {
      toggleModalSignout(true);
      return;
    }
    if (type === 'changedpassword') {
      toggleModalChangePassword(true);
      return;
    }
  };

  const updateProfile = () => {
    const formData = new FormData();
    formData.append('business_name', name);
    formData.append('email', email);
    if (!isEmpty(currentPassword)) {
      formData.append('password', password);
      formData.append('current_password', currentPassword);
    }
    if (
      !isEmpty(filePath) ||
      !isEmpty(props.companyProfile.attributes.avatar)
    ) {
      formData.append('avatar', {
        uri:
          filePath.length > 0
            ? filePath
            : props.companyProfile.attributes.avatar,
        type: 'image/jpeg',
        name: `${moment().unix()}.jpg`,
      });
    }
    props.profileActions.updateCompanyProfile({
      params: formData,
      onSuccess: () => {
        props.profileActions.getCompanyProfileData({
          params: props.companyProfile.id,
          onSuccess: () => {},
          onFail: () => {},
        });
      },
      onFail: () => Alert.alert('error', 'Something went wrong'),
    });
  };

  const chooseFile = () => {
    var options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      quality: 0.2,
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        setFilePath(source.uri);
      }
    });
  };
  return (
    <View style={style.container}>
      <View style={style.backgroundHeader}>
        <View style={style.header_center_view}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'flex-end',
              paddingBottom: 15,
            }}>
            <Image
              style={style.icon_image}
              source={filePath ? {uri: filePath} : defaultImage}
            />
            <TouchableOpacity
              style={style.under_icon_view}
              onPress={chooseFile}>
              <Text style={style.change_profile_text}>Change Picture</Text>
              <Image
                style={style.arrow_right_icon}
                source={require('../../../assets/images/np_arrow_profile.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <SafeAreaView style={style.main_content}>
        <View style={style.invite_view}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginBottom: 15,
            }}>
            Send Invite By Email
          </Text>
          <TouchableOpacity
            style={{
              height: verticalScale(47),
              borderRadius: scale(5),
              borderWidth: 0.2,
              justifyContent: 'center',
              borderColor: '#A2A2A2',
              paddingHorizontal: scale(10),
              width: '100%',
            }}
            onPress={() => onHandleProfileInfo('emailInvite')}>
            <Text style={{color: '#A2A2A2', fontSize: 16}}>
              Type new member email address…
            </Text>
          </TouchableOpacity>
        </View>
        <InfoField
          leftText="Manage Current Members"
          onPress={() => {
            props.navigation.navigate('AdminMembers');
          }}
        />
        <InfoField
          onPress={() => onHandleProfileInfo('name')}
          leftText="Name"
          rightText={name}
        />
        <InfoField
          onPress={() => onHandleProfileInfo('email')}
          leftText="Email"
          rightText={email}
        />
        <InfoField
          onPress={() => onHandleProfileInfo('password')}
          leftText="Change Password"
          rightText={convertStringToPassword(
            isEmpty(password) ? '********' : password,
          )}
        />
      </SafeAreaView>

      {/* Signout Modal  */}
      <SignoutModal
        isVisible={modalSignout}
        onBackdropPress={() => onHideModal('signout')}
        onSignout={() => onHandleSignOut()}
        onCancel={() => onHideModal('signout')}
      />

      {/* Send Email Invite Modal */}
      <InputModal
        label={'Send Invite By Email'}
        value={emailInvite}
        isEmail={true}
        placeholder={'Type new member email address...'}
        isVisible={modalEmailInvite}
        onBackdropPress={() => onHideModal('emailInvite')}
        onClose={() => onHideModal('emailInvite')}
        onSave={value => onPressSaveEmailSend(value)}
      />

      {/* Email Send successfully modal popup */}
      <InviteSuccessModal
        isVisible={modalSentEmailSuccess}
        onBackdropPress={() => toggleModalSentEmailSuccess(false)}
        onClose={() => toggleModalSentEmailSuccess(false)}
      />

      {/* Modal For Name */}
      <InputModal
        value={name}
        isEmail={false}
        placeholder={'Type your name...'}
        isVisible={modalNameKeyboard}
        onBackdropPress={() => onHideModal('name')}
        onClose={() => onHideModal('name')}
        onSave={value => onSaveNamePress(value)}
      />

      {/* Modal For Email  */}
      <InputModal
        value={email}
        isEmail={true}
        placeholder={'Type your email...'}
        isVisible={modalEmailKeyboard}
        onBackdropPress={() => onHideModal('email')}
        onClose={() => onHideModal('email')}
        onSave={value => onPressSaveEmail(value)}
      />

      {/* Modal for Password  */}
      <ChangePasswordModal
        isVisible={modalPasswordKeyboard}
        onBackdropPress={() => onHideModal('password')}
        onClose={() => onHideModal('password')}
        onSave={password => handlePasswordChange(password)}
        currentPassword={password}
        handleCurrentPassword={handleCurrentPassword}
      />

      {/* Password changed successfuly  */}
      <ChangePasswordSuccessModal
        isVisible={modalChangedPassword}
        onBackdropPress={() => onHideModal('changedpassword')}
        onClose={() => onHideModal('changedpassword')}
      />
    </View>
  );
};

const mapStateToProps = state => ({
  companyProfile: getCompanyProfile(state),
});

const mapDispatchToProps = dispatch => ({
  profileActions: bindActionCreators(
    {
      signOut,
      getCompanyProfileData,
      updateCompanyProfile,
      inviteEmployeeToCompany,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
