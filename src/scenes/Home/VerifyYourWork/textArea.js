import styles from './style';
import React,{memo} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const  TextArea=memo(({onClickKeyboard, value})=>{
        return (
         
                <TouchableOpacity onPress={()=>{onClickKeyboard()}} style={styles.TextAreInput}>
                    <Text style={styles.textAreaText}>{value ? value : 'Write a description (optional)...'}</Text>
                    <View style={styles.numView}>
        <Text style={styles.num}>{value.length}-300</Text>
                    </View>
                </TouchableOpacity>
        );
    });
export default TextArea;