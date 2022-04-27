import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import style from './style';

const AdminCompletedTask = props => {
  return (
    <View style={style.container}>
      <View style={style.ViewDown}>
        <View style={style.viewTxtSearchby}>
          <Text style={style.txtSearchTasksByMembers}>
            Search Tasks By Members
          </Text>
        </View>

        <View style={style.viewInputSearch}>
          <TextInput
            style={style.InputSearch}
            placeholder="Search..."
            placeholderTextColor="#A2A2A2"
          />
        </View>
        <ScrollView>
          <View
            style={{
              flex: 1,
              marginTop: '1%',
            }}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('AdminTaskDetails');
              }}>
              <View
                style={{
                  flex: 1,
                  margin: 1,
                  paddingTop: 5,
                  borderBottomWidth: 0.2,
                  borderBottomColor: '#A2A2A2',
                }}>
                <View style={style._viewPostone}>
                  <Image source={require('../../assets/images/Img2.png')} />
                </View>

                <View style={style.viewTxtRoofRepair}>
                  <Text style={style.txtRoofRepair}>
                    Roof Repair needs changin…
                  </Text>
                  <Text style={style.txtdownRoof}>
                    Fix and repair roof top, owner will be there. We have
                    Already contacted owner and is expecting you. Now …
                  </Text>
                </View>

                <View style={style.viewDate}>
                  <Text style={style.txtDateOnePost}>
                    Oct.20,2019 2:00 p.m.
                  </Text>
                  <Text style={style.txtLocation}>
                    1552 Washington Street Avenue Boulev, Atlanta, G…
                  </Text>
                </View>

                <View style={style.viewEmailCompleted}>
                  <Image
                    style={style.imageprofil}
                    source={require('../../assets/images/profil2.png')}
                  />
                  <View
                    style={{bottom: '115%', marginLeft: '22%', height: '20%'}}>
                    <Text style={style.txtEmail}>
                      jonathan.ramirez@mail.com
                    </Text>
                    <Text style={style.txtCompleted}>Completed</Text>
                  </View>

                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: 27,
                      marginRight: 70,
                    }}>
                    <Image
                      style={style.CompletedsmallImg}
                      source={require('../../assets/images/completedSmall.png')}
                    />
                    <Image
                      style={style.Completedsmall}
                      source={require('../../assets/images/doneSmall.png')}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <View
              style={{
                flex: 1,
                marginTop: '4%',
              }}>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('AdminTaskDetails');
                }}>
                <View
                  style={{
                    flex: 1,
                    margin: 1,
                    paddingTop: 5,
                    borderBottomWidth: 0.2,
                    borderBottomColor: '#A2A2A2',
                  }}>
                  <View style={style._viewPostone}>
                    <TouchableOpacity
                      onPress={() => {
                        props.navigation.navigate('AdminTaskDetails');
                      }}>
                      <Image source={require('../../assets/images/Img2.png')} />
                    </TouchableOpacity>
                  </View>

                  <View style={style.viewTxtRoofRepair}>
                    <Text style={style.txtRoofRepair}>
                      Roof Repair needs changin…
                    </Text>
                    <Text style={style.txtdownRoof}>
                      Fix and repair roof top, owner will be there. We have
                      Already contacted owner and is expecting you. Now …
                    </Text>
                  </View>

                  <View style={style.viewDate}>
                    <Text style={style.txtDateOnePost}>
                      Oct.20,2019 2:00 p.m.
                    </Text>
                    <Text style={style.txtLocation}>
                      1552 Washington Street Avenue Boulev, Atlanta, G…
                    </Text>
                  </View>

                  <View style={style.viewEmailCompleted}>
                    <Image
                      style={style.imageprofil}
                      source={require('../../assets/images/profil2.png')}
                    />
                    <View
                      style={{
                        bottom: '115%',
                        marginLeft: '22%',
                        height: '20%',
                      }}>
                      <Text style={style.txtEmail}>
                        jonathan.ramirez@mail.com
                      </Text>
                      <Text style={style.txtCompleted}>Completed</Text>
                    </View>

                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 27,
                        marginRight: 70,
                      }}>
                      <Image
                        style={style.CompletedsmallImg}
                        source={require('../../assets/images/completedSmall.png')}
                      />
                      <Image
                        style={style.Completedsmall}
                        source={require('../../assets/images/doneSmall.png')}
                      />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default AdminCompletedTask;
