import React, {memo} from 'react';
import {TouchableOpacity, View, Image, Text, StyleSheet} from 'react-native';
import {verticalScale, scale} from '../../Utils/scaling';

const MemberRow = memo(
  ({onPress, onLongPress, source, pressed, pressedColor, text}) => {
    return (
      <TouchableOpacity
        style={style.container}
        onPress={onPress}
        onLongPress={onLongPress}>
        <View style={style.image_container}>
          {source && <Image style={style.image} source={source} />}
        </View>
        <View style={style.text_container}>
          <Text
            style={{
              fontSize: 16,
              color: pressed ? pressedColor : '#A2A2A2',
              fontWeight: 'normal',
            }}>
            {text}
          </Text>
        </View>
        <View style={style.view_right}>
          {pressed && (
            <View
              style={[style.done_container, {backgroundColor: pressedColor}]}>
              <Image
                style={{height: 10, width: 13}}
                source={require('../../assets/images/np_done.png')}
              />
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  },
);

const style = StyleSheet.create({
  container: {
    height: verticalScale(65),
    flexDirection: 'row',
    borderBottomWidth: 0.2,
    borderBottomColor: '#A2A2A2',
  },
  image_container: {
    height: '100%',
    width: 'auto',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: scale(10),
  },
  image: {
    height: verticalScale(50),
    width: scale(50),
    borderRadius: verticalScale(25),
  },
  view_right: {
    height: 'auto',
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  done_container: {
    height: verticalScale(20),
    width: scale(23),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(4),
  },
});
export default MemberRow;
