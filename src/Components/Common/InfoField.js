import React, {memo} from 'react';
import {TouchableOpacity, Text, StyleSheet, View, Image} from 'react-native';
import {scale, verticalScale} from '../../Utils/scaling';

const InfoField = memo(({style, onPress, leftText, rightText}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <View style={styles.left_view}>
        <Text style={styles.left_text}>{leftText}</Text>
      </View>
      <View style={[styles.right_view, !rightText && {alignItems: 'flex-end'}]}>
        {rightText ? (
          <Text style={styles.right_text}>{rightText}</Text>
        ) : (
          <Image source={require('../../assets/images/np_arrow_profile.png')} />
        )}
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    height: verticalScale(60),
    borderBottomWidth: 0.2,
    borderBottomColor: '#A2A2A2',
    paddingVertical: verticalScale(10),
    flexDirection: 'row',
  },
  right_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(10),
  },
  left_view: {
    height: '100%',
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingRight: scale(20),
  },
  left_text: {
    color: '#A2A2A2',
    fontSize: 16,
    fontWeight: 'bold',
  },
  right_text: {
    fontSize: 16,
    color: '#0B47BB',
  },
});

export default InfoField;
