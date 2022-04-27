import React from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, ScrollView, } from 'react-native'
import style from './style'

const AdminAllTasks = (props) => {

    const onPressCreateTask = () => {
      props.navigation.navigate('AdminCreateNewTask');
    }
    const onPressCompleted = () => {
      props.navigation.navigate('AdminCompletedTask');
    }
    const onPressLogoScreen = () => {
      props.navigation.navigate('AdminMyProfile'); 
    }
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.txtAllTasks}>All Tasks</Text>
                <TouchableOpacity
                    onPress={onPressCreateTask}
                    style={style.buttonScreenShoot}>
                    <Image source={require('../../assets/img/ScreenShot.png')} />
                    <Image style={style.ImagePlus} source={require('../../assets/img/Plus.png')} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={onPressCompleted}
                    style={style.buttonCompleted}
                >
                    <Image source={require('../../assets/img/completed.png')} />
                    <Image style={style.ImageDone} source={require('../../assets/img/Done.png')} />

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={onPressLogoScreen}
                    style={style.buttonLogoScreen}
                >
                    <Image source={require('../../assets/img/LogoScreen.png')} />

                </TouchableOpacity>
            </View>
            <View style={style.ViewDown}>
                <View style={style.viewTxtSearchby}>
                    <Text style={style.txtSearchTasksByMembers}>Search Tasks By Members</Text>

                </View>
                <View style={style.viewInputSearch}>
                    <TextInput
                        style={style.InputSearch}
                        placeholder="Search..."
                        placeholderTextColor="#A2A2A2"
                    />
                </View>
                <ScrollView>
                    <View style={{
                        flex: 1, marginTop: '1%',
                    }}>
                        <View style={{
                            flex: 1,
                            margin: 1,
                            paddingTop: 3,
                            borderBottomWidth: 0.2,
                            borderBottomColor: '#A2A2A2'
                        }}>
                            <View style={style._viewPostone}>
                                <Image source={require('../../assets/img/image1.png')} />
                            </View>

                            <View style={style.viewTxtRoofRepair}>
                                <Text style={style.txtRoofRepair}>Roof Repair</Text>
                                <Text style={style.txtdownRoof}>Fix and repair roof top, owner will be there. We have Already contacted owner and is expecting you. Now …</Text>
                            </View>

                            <View style={style.viewDate}>
                                <Text style={style.txtDateOnePost}>Oct.20,2019   2:00 p.m.</Text>
                                <Text style={style.txtLocation}>1552 Washington Street, Atlanta, Ga</Text>
                            </View>
                            <View style={style.viewEmailCompleted}>
                                <Image style={style.imageprofil} source={require('../../assets/img/profil.png')} />
                                <View style={{ bottom: '115%', marginLeft: '22%', height: '20%' }}>
                                    <Text style={style.txtEmail}>roy.wood@mail.com</Text>
                                    <Text style={style.txtCompleted}>Completed</Text>

                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 27, marginRight: 70 }}>
                                    <Image style={style.CompletedsmallImg} source={require('../../assets/img/donesmall.png')} />
                                    <Image style={style.Completedsmall} source={require('../../assets/img/donee.png')} />

                                </View>
                            </View>
                        </View>
                        <View style={{
                            flex: 1, marginTop: '4%',
                        }}>
                            <View style={{

                                flex: 1,
                                margin: 1,
                                paddingTop: 5,
                                borderBottomWidth: 0.2,
                                borderBottomColor: '#A2A2A2'
                            }}>
                                <View style={style._viewPostone}>
                                    <Image source={require('../../assets/img/image2.png')} />
                                </View>

                                <View style={style.viewTxtRoofRepair1}>
                                    <Text style={style.txtRoofRepair}>Roof Repair needs changin…</Text>
                                    <Text style={style.txtdownRoof}>Fix and repair roof top, owner will be there. We have Already contacted owner and is expecting you. Now …</Text>
                                </View>

                                <View style={style.viewDate}>
                                    <Text style={style.txtDateOnePost}>Oct.20,2019   2:00 p.m.</Text>
                                    <Text style={style.txtLocation}>1552 Washington Street Avenue Boulev, Atlanta, G…</Text>
                                </View>


                                <View style={style.viewEmailCompleted}>
                                    <Image style={style.imageprofil} source={require('../../assets/img/profil2.png')} />
                                    <View style={{ bottom: '115%', marginLeft: '22%', height: '20%' }}>
                                        <Text style={style.txtEmail}>frank.sullivan@mail.com</Text>
                                        <Text style={style.txtGoingNow}>Going Now</Text>

                                    </View>

                                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 27, marginRight: 70 }}>
                                        <Image style={style.PlusImage} source={require('../../assets/img/ScreenShotsmall.png')} />
                                        <Image style={style.PlussmallImg} source={require('../../assets/img/plusSmall.png')} />

                                    </View>

                                </View>
                            </View>
                        </View>



                        <View style={{
                            flex: 1, marginTop: '4%',
                        }}>

                            <View style={{

                                flex: 1,
                                margin: 1,
                                paddingTop: 5,
                                borderBottomWidth: 0.2,
                                borderBottomColor: '#A2A2A2'
                            }}>

                                <View style={style._viewPostone}>
                                    <Image source={require('../../assets/img/image3.png')} />
                                </View>

                                <View style={style.viewTxtRoofRepair1}>
                                    <Text style={style.txtRoofRepair}>Roof Repair needs changin…</Text>
                                    <Text style={style.txtdownRoof}>Fix and repair roof top, owner will be there. We have Already contacted owner and is expecting you. Now …</Text>
                                </View>

                                <View style={style.viewDate}>
                                    <Text style={style.txtDateOnePost}>Oct.20,2019   2:00 p.m.</Text>
                                    <Text style={style.txtLocation}>1552 Washington Street Avenue Boulev, Atlanta, G…</Text>
                                </View>


                                <View style={style.viewEmailCompleted}>
                                    <Image style={style.imageprofil} source={require('../../assets/img/profil3.png')} />
                                    <View style={{ bottom: '115%', marginLeft: '22%', height: '20%' }}>
                                        <Text style={style.txtEmail}>elizabeth.holmes@mail.com</Text>
                                        <Text style={style.txtArrived}>Arrived</Text>

                                    </View>



                                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 27, marginRight: 70 }}>
                                        <Image style={style.ArrivedImage} source={require('../../assets/img/Location.png')} />
                                        <Image style={style.ArrivedImagesmall} source={require('../../assets/img/locationsmall.png')} />

                                    </View>
                                </View>
                            </View>
                        </View>



                        <View style={{
                            flex: 1, marginTop: '4%',
                        }}>

                            <View style={{

                                flex: 1,
                                margin: 1,
                                paddingTop: 5,
                                borderBottomWidth: 0.2,
                                borderBottomColor: '#A2A2A2'
                            }}>

                                <View style={style._viewPostone}>
                                    <Image source={require('../../assets/img/Image4.png')} />
                                </View>

                                <View style={style.viewTxtRoofRepair1}>
                                    <Text style={style.txtRoofRepair}>Roof Repair needs changin…</Text>
                                    <Text style={style.txtdownRoof}>Fix and repair roof top, owner will be there. We have Already contacted owner and is expecting you. Now …</Text>
                                </View>

                                <View style={style.viewDate}>
                                    <Text style={style.txtDateOnePost}>Oct.20,2019   2:00 p.m.</Text>
                                    <Text style={style.txtLocation}>1552 Washington Street Avenue Boulev, Atlanta, G…</Text>
                                </View>


                                <View style={style.viewEmailCompleted}>
                                    <Image style={style.imageprofil} source={require('../../assets/img/profil4.png')} />
                                    <View style={{ bottom: '115%', marginLeft: '22%', height: '20%' }}>
                                        <Text style={style.txtEmail}>chris.chavez@mail.com</Text>
                                        <Text style={style.txtStart}>Start</Text>

                                    </View>

                                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 27, marginRight: 70 }}>
                                        <Image style={style.StartupImg} source={require('../../assets/img/Startup.png')} />
                                        <Image style={style.StartupImgsmall} source={require('../../assets/img/startupsmall.png')} />

                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )

}

export default AdminAllTasks;