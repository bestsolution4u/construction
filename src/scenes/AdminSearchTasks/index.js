import React, { useState } from 'react';
import { Text, View, TextInput, Image } from 'react-native';
import { Button } from 'native-base';
import Icons from 'react-native-vector-icons/EvilIcons';
import { map, filter, isEmpty, includes, trim } from 'lodash';
import usersList from './Data';

import style from './style';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const AdminSearchTasks = () => {
    const [member, getMember] = useState(null);
    let members = [];
    if (member !== null && trim(member.length) > 0) {
        members = filter(usersList, data => {
            return includes(data.name, member);
        });
    }

    return (

        <View style={style.container}>

            <Text style={style.heading}>Search Tasks By Members</Text>
            <View style={style.searchBarView}>
                <TextInput
                    name="searchBar"
                    value={member}
                    onChangeText={text => getMember(text)}
                    style={style.searchBarInput}


                />
                <Button transparent onPress={() => getMember('')}>
                    <Icons name="close" size={20} />
                </Button>
            </View>
            <View style={style.listView}>
                <ScrollView>
                    {!isEmpty(members)
                        ? map(members, data => (
                            <View style={style.listData} key={data.id}>
                                <Image
                                    source={{ uri: data.profilePhoto }}
                                    style={style.profilePhoto}
                                />
                                <Text
                                    style={{
                                        color: data.email ? "#0B47BB" : "black", marginLeft: 20, fontSize: 15,
                                    }}
                                >{data.email}</Text>
                            </View>
                        ))
                        : member !== null &&
                        member.length > 0 && (
                            <View style={style.listData}>
                                <Text>No Record Found</Text>
                            </View>
                        )}
                </ScrollView>
            </View>
        </View>
    );
};

export default AdminSearchTasks;
