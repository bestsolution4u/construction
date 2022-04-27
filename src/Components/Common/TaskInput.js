import React, {memo} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {verticalScale, scale} from '../../Utils/scaling';
import {isEqual} from 'lodash';

const TaskInput = memo(
  ({
    onPress,
    multiline,
    assignTask,
    required,
    styleInput,
    value,
    placeholder,
    actualCharacters,
    maxCharacters,
  }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          style.container,
          multiline && {height: verticalScale(120)},
          assignTask && {backgroundColor: '#F5F6FA'},
        ]}>
        <Text style={[style.input, styleInput, value && {color: 'black'}]}>
          <Text
            style={{
              color: required ? '#C11E1E' : 'transparent',
              fontSize: verticalScale(16),
            }}>
            *
          </Text>
          {value && value.length >= 1 ? value : placeholder}
        </Text>
        <View style={style.number_view}>
          <Text
            style={{
              color: maxCharacters ? '#A2A2A2' : 'transparent',
              fontSize: verticalScale(14),
            }}>
            {actualCharacters}/{maxCharacters}
          </Text>
        </View>
      </TouchableOpacity>
    );
  },
);

const style = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    borderBottomColor: '#A2A2A2',
    borderBottomWidth: 0.3,
    height: verticalScale(60),
    paddingBottom: verticalScale(10),
    backgroundColor: '#FFFFFF',
    marginBottom: verticalScale(1),
    paddingTop: verticalScale(20),
  },
  input: {
    flex: 1,
    color: '#A2A2A2',
    fontSize: verticalScale(16),
    alignSelf: 'flex-start',
    paddingTop: isEqual(Platform.OS, 'ios') ? verticalScale(12) : 0,
  },
  required: {
    right: 2,
    width: 'auto',
    height: '100%',
    justifyContent: 'flex-start',
  },
  number_view: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    height: '100%',
    width: 'auto',
  },
});

export default TaskInput;
