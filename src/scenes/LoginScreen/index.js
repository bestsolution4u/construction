import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, Image, StatusBar} from 'react-native';
import style from './style';
import Input from './Input';
import ForgotPasswordModal from '../ForgetPasswordScreen';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as authActions from '../../redux/actions/authActions';
import {validationSchemaLogin} from '../../Utils/validation';
import {Formik} from 'formik';
import {successMessage, errorMessage} from '../../Utils/alerts';
import {scale} from '../../Utils/scaling';
import {loadCredentials, setData, getData} from '../../redux/utils/storage';
import {setCredentials} from '../../redux/services/api';
import {isEmpty} from 'lodash';

const LoginScreen = props => {
  const [incorrectPassword, handleIncorrectPassword] = useState();
  const [forgotPasswordModal, setForgotPasswordModal] = useState(false);

  useEffect(() => {
    loadCredentials().then(credentials => {
      if (!isEmpty(credentials)) {
        const {type, access_token, client, uid} = credentials;
        setCredentials(access_token, client, uid);
        if (type === 'employees') {
          props.navigation.navigate('User');
        } else {
          props.navigation.navigate('Admin');
        }
      }
    });
  }, []);

  const toggleForgotPasswordModal = () => {
    setForgotPasswordModal(!forgotPasswordModal);
  };

  const onPressLogin = (email, password) => {
    handleIncorrectPassword();
    props.authActions.signIn({
      params: {email: email, password: password},
      onSuccess: response => {
        successMessage({message: 'Login Success'});
        if (response.data.data.type === 'employees') {
          setData('User', response.data.data);
          props.navigation.navigate('User');
        } else {
          setData('Admin', response.data.data);
          props.navigation.navigate('Admin');
        }
      },
      onFail: error => {
        errorMessage({message: error.errorMessage});
        handleIncorrectPassword(error.errorMessage);
      },
    });
  };

  return (
    <View style={style.container}>
      <StatusBar backgroundColor="#fffffa" barStyle="dark-content" />
      <View style={style.header}>
        <Text style={style.txtSumbitWorkOn}>Sumbit Work on</Text>
        <Text style={style.txtThego}>The Go</Text>
      </View>
      <View style={style.backgroundImageContainer}>
        <Image
          source={require('../../assets/images/background.png')}
          style={style.backgroundImage}
        />

        <View style={style.ViewMidle}>
          <View style={{alignSelf: 'flex-start', marginHorizontal: scale(-10)}}>
            <Text style={style.txtCheckyouremails}>Check your emails</Text>
          </View>
          <Formik
            onSubmit={values => onPressLogin(values.email, values.password)}
            validationSchema={validationSchemaLogin}>
            {({values, handleChange, errors, touched, handleSubmit}) => (
              <View
                style={{
                  flex: 1,
                  alignContent: 'center',
                  marginVertical: scale(50),
                }}>
                <Input
                  placeholder="Email"
                  value={values.email}
                  keyboard="email-address"
                  styleView={style.inputField}
                  onChangeText={handleChange('email')}
                />
                {touched.email && errors.email && (
                  <Text style={{fontSize: 10, color: 'red'}}>
                    {errors.email}
                  </Text>
                )}
                <Input
                  placeholder="Password"
                  value={values.password}
                  secure={true}
                  styleView={style.inputField}
                  onChangeText={handleChange('password')}
                />
                {touched.password && errors.password && (
                  <Text style={{fontSize: 10, color: 'red'}}>
                    {errors.password}
                  </Text>
                )}
                <View style={style.buttonForgotPassword}>
                  <Text style={style.txtIncorrect}>{incorrectPassword}</Text>
                  <TouchableOpacity onPress={toggleForgotPasswordModal}>
                    <Text style={style.txtForgetPassword}>Forgot Password</Text>
                  </TouchableOpacity>
                </View>

                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <TouchableOpacity
                    style={style.buttonLogin}
                    onPress={handleSubmit}>
                    <Text style={style.txtLogin}>Login</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>

          <View style={style.ViewLogoHamati}>
            <Image
              style={{height: 58, width: 45}}
              source={require('../../assets/images/logo.png')}
            />
            <Text style={style.txtHamatiRoffing}>HAMATI ROOFING</Text>
          </View>
        </View>
      </View>
      {forgotPasswordModal && (
        <ForgotPasswordModal
          isModalVisible={forgotPasswordModal}
          toggleModal={toggleForgotPasswordModal}
        />
      )}
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
