import React, {useState} from 'react';
import {
  Text,
  View,
  Button,
  TouchableHighlight,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import style from './style';

const DescriptionScreen = props => {
  const [description, setDescription] = useState(props.description);

  return (
    <Modal style={style.styleModal} isVisible={props.isVisible}>
      <View style={style.Xmodal}>
        <View style={{flex: 1, paddingLeft: 13, paddingRight: 0}}>
          <TouchableHighlight
            style={style.buton}
            onPress={() => {
              props.onHideModal();
            }}>
            <Image
              style={style.imageX}
              source={require('../../assets/images/np_x.png')}
            />
          </TouchableHighlight>
        </View>

        <View style={style.viewModal}>
          <View style={style.buttonSave}>
            <TouchableOpacity
              onPress={() => {
                props.onSave(description);
              }}>
              <Text style={style.TxtSave}>Save</Text>
            </TouchableOpacity>
          </View>

          <View style={style.InputDescription}>
            <TextInput
              autoFocus={true}
              placeholder={
                " I tired contacting owner but didnt't answer the \n door. |"
              }
              placeholderTextColor="#A2A2A2"
              value={description}
              onChangeText={text => {
                setDescription(text);
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DescriptionScreen;
