import React, {memo} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {verticalScale, scale} from '../../Utils/scaling';

const Input = memo(({placeholder, onChange, value, styleInput, ...rest}) => {
  return (
    <TextInput
      onChangeText={onChange}
      placeholder={placeholder}
      style={[style.container, styleInput]}
      placeholderTextColor="#A2A2A2"
      value={value}
      {...rest}
    />
  );
});
const style = StyleSheet.create({
  container: {
    height: verticalScale(47),
    borderRadius: scale(5),
    borderWidth: 0.2,
    borderColor: '#A2A2A2',
    paddingHorizontal: scale(10),
    fontSize: 16,
    width: '100%',
  },
});
export default Input;
