import styles from './style';
import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import * as authActions from '../../redux/actions/authActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Formik} from 'formik';
import {validationSchemaEmail} from '../../Utils/validation';

const InputView = props => {
  const onPressSend = email => {
    props.authActions.forgotPassword({
      email,
      onSuccess: response => {
        props.onPress();
      },
      onFail: error => {
        props.onErrorMessage(
          'Error when sending the email.',
          error.errorMessage,
        );
      },
    });
  };

  return (
    <Formik
      initialValues={{email: ''}}
      onSubmit={values => {
        onPressSend(values.email);
      }}
      validationSchema={validationSchemaEmail}>
      {({values, handleChange, errors, touched, handleSubmit}) => (
        <View style={styles.InputView}>
          <View style={styles.sendView}>
            <TouchableOpacity onPress={handleSubmit}>
              <Text style={styles.sendText}>Send</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.forgotView}>
            <Text style={styles.forgotText}>Forgot Password</Text>
          </View>
          <TextInput
            autoFocus
            style={styles.input}
            placeholder="What's your email?"
            value={values.email}
            keyboard="email-address"
            onChangeText={handleChange('email')}
          />
          {touched.email && errors.email && (
            <Text style={{fontSize: 10, color: 'red'}}>{errors.email}</Text>
          )}
        </View>
      )}
    </Formik>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    authActions: bindActionCreators(authActions, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(InputView);
