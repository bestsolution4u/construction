import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Card, Button} from 'native-base';
import {verticalScale, scale} from '../../Utils/scaling';
import moment from 'moment';
import defaultImage from '../../assets/images/default.png';

export default function TaskContainer(props) {
  return (
    <TouchableOpacity
      onPress={() => props.onItemPress && props.onItemPress()}
      style={{
        borderBottomColor: '#A2A2A2',
        borderBottomWidth: 0.3,
        marginHorizontal: scale(15),
      }}>
      <View style={style.container}>
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'flex-start',
            }}>
            <Image style={style.image} source={props.source ? {uri: props.source} : defaultImage} />
            <View style={{flex: 1, paddingLeft: scale(10)}}>
              <Text style={style.title} numberOfLines={1}>
                {props.title}
              </Text>
              <Text style={style.description} numberOfLines={4}>
                {props.description}
              </Text>
            </View>
          </View>
          <View style={style.date_view}>
            <View
              style={{marginVertical: verticalScale(10), flexDirection: 'row'}}>
              <Text style={style.date_time}>
                {moment(props?.date).format('MMM. DD, YYYY')}
              </Text>
              <Text style={{...style.date_time, marginLeft: 15}}>
                {moment(props?.time).format('h:mm a')}
              </Text>
            </View>
            <Text
              style={[style.date_time, {marginBottom: verticalScale(10)}]}
              numberOfLines={1}>
              {props.adress}
            </Text>
          </View>
        </View>
        <Button onPress={props.onPress} style={[style.btn, props.buttonStyle]}>
          <Text
            style={[
              {color: '#FFFFFF', fontSize: verticalScale(16)},
              props.buttonTextStyle,
            ]}>
            {props.buttonTitle ? props.buttonTitle : 'Start'}
          </Text>
        </Button>
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    paddingBottom: verticalScale(20),
    paddingTop: verticalScale(10),
  },
  title: {
    fontSize: verticalScale(18),
    color: '#000000',
    fontWeight: 'bold',
  },
  description: {
    color: '#000000',
    fontSize: verticalScale(14),
    textAlign: 'justify',
    fontWeight: 'normal',
  },
  image: {
    height: verticalScale(80),
    width: scale(120),
    borderRadius: 5,
    top: verticalScale(5),
  },
  date_view: {
    flex: 1,
  },
  date_time: {
    color: '#0B47BB',
    fontSize: verticalScale(16),
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0B47BB',
    height: 50,
    borderRadius: verticalScale(5),
    elevation: 0,
  },
});
