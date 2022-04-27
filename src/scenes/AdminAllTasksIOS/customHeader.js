import React from 'react';
import {Text, View, Image} from 'react-native';
import {Button} from 'native-base';
import Icons from 'react-native-vector-icons/EvilIcons';
import styles from './styles';

Icons.loadFont();

const AdminAllTasksHeader = props => (
  <View style={styles.header}>
    <View style={styles.titleView}>
      {props.showCompleted && (
        <Button
          transparent
          style={styles.backBtn}
          onPress={() => props.toggleCompletedTask(false)}>
          <Icons name="chevron-left" size={45} />
        </Button>
      )}
      <Text style={styles.titleText}>
        {props.showCompleted ? 'Completed Tasks' : 'All Tasks'}
      </Text>
    </View>
    <View style={styles.headerRightView}>
      <Button
        style={[styles.btn, {backgroundColor: '#0b47bc'}]}
        onPress={() => props.onPressCreateTask()}>
        <Image source={require('../../assets/img/Plus.png')} />
      </Button>
      {!props.showCompleted && (
        <Button
          style={[styles.btn, {backgroundColor: '#0aa074'}]}
          onPress={() => props.onPressCompleted()}>
          <Image source={require('../../assets/img/Done.png')} />
        </Button>
      )}
      <Button style={styles.btn} onPress={() => props.onPressLogoScreen()}>
        {props.profileImage && (
          <Image style={styles.imageIcon} source={{uri: props.profileImage}} />
        )}
      </Button>
    </View>
  </View>
);

export default AdminAllTasksHeader;
