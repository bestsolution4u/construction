import React,{memo} from 'react';
import styles from './style';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

 const CompletedTasks=memo(({navigation,title,description,date,time,address})=>{
        return (
            <React.Fragment>
                <View style={styles.completedTasks}>
                    <View style={styles.picTextView}>
                        <View style={styles.picture}>
                            <Image source={require('../../assets/images/roof_image.png')}
                                style={{
                                    height: '100%',
                                    width: '100%',
                                }}
                            />
                        </View>
                        <ScrollView nestedScrollEnabled style={styles.description}>
                            <TouchableOpacity onPress={() => { navigation.navigate('UserTaskDetails') }}>
                                <Text style={styles.title}> {title}</Text>
                                <Text style={styles.descText}>{description}</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>

                <TouchableOpacity style={styles.data}>
                    <View style={styles.timeView}>
                        <Text style={styles.blueText}>{date}</Text>
                        <Text style={styles.blueText2}>{time}</Text>
                    </View>
                    <View style={styles.addressView}>
                        <Text style={styles.blueText3}>{address}</Text>
                    </View>
                </TouchableOpacity>
            </React.Fragment>
        );
    });
    export default CompletedTasks