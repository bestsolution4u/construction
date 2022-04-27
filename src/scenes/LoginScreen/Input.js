import React from 'react';
import {
    TextInput,
    StyleSheet,
    View,
} from 'react-native';
import { scale, moderateScale } from '../../Utils/scaling';

export default class Input extends React.Component {
    render() {
        return (
            <View style={[style.view, this.props.styleView]}>

                <TextInput
                    placeholderTextColor={'#A2A2A2'}
                    secureTextEntry={this.props.secure}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChangeText={this.props.onChangeText}
                    style={[style.conatiner, this.props.style]}
                    keyboardType={this.props.keyboard}
                    style={{ fontSize: 16, fontFamily: 'Helvetica', color: 'black' }}
                />
            </View>
        );
    }
}
const style = StyleSheet.create({
    view: {
        borderBottomWidth: 1,
        width: scale(314),
        opacity: 0.5,
        borderBottomColor: '#00000029',
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        bottom: 10,
        position: 'relative',
    }
})