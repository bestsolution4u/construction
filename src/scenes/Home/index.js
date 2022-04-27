import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Button } from 'native-base';
import AdminMembers from '../AdminMembers/index';
import MyProfile from '../Admin/MyProfile';
import UserTaskArrived from '../UserTaskArrived';
import AdminAssignTask from '../AdminAssignTask/index';



const Home = (props) => {

  useEffect(() => {

  });

  return (
    <View style={{ flex: 1, paddingLeft: 20, paddingRight: 20, paddingTop: 10 }}>
      <ScrollView>
       

        <Button onPress={() => { props.navigation.navigate("AdminMyProfile") }} style={{ height: 50, marginBottom: 25, borderRadius: 10, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>
            AdminMyProfile
         </Text>
        </Button>

        <Button onPress={() => { props.navigation.navigate("AdminAssignTask") }} style={{ height: 50, marginBottom: 25, borderRadius: 10, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>
            AdminAssignTask
         </Text>
        </Button>

        <Button onPress={() => { props.navigation.navigate("AdminCreateNewTask") }} style={{ height: 50, marginBottom: 25, borderRadius: 10, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>
            AdminCreateNewTask
         </Text>
        </Button>

        <Button onPress={() => { props.navigation.navigate("AdminMembers") }} style={{ height: 50, marginBottom: 25, borderRadius: 10, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>
            AdminMembers
         </Text>
        </Button>

        <Button onPress={() => { props.navigation.navigate("AdminTaskDetails") }} style={{ height: 50, marginBottom: 25, borderRadius: 10, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>
            AdminTaskDetails
         </Text>
        </Button>

        <Button onPress={() => { props.navigation.navigate("AdminTaskDetailsCompleted") }} style={{ height: 50, marginBottom: 25, borderRadius: 10, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>
            AdminTaskDetailsCompleted
         </Text>
        </Button>

        <Button onPress={() => { props.navigation.navigate("ForgetPasswordScreen") }} style={{ height: 50, marginBottom: 25, borderRadius: 10, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>
            ForgetPasswordScreen
         </Text>
        </Button>

        <Button onPress={() => { props.navigation.navigate("FullMapDirection") }} style={{ height: 50, marginBottom: 25, borderRadius: 10, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>
            FullMapDirection
         </Text>
        </Button>

        <Button onPress={() => { props.navigation.navigate("PasswordResetSuccessfully") }} style={{ height: 50, marginBottom: 25, borderRadius: 10, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>
            PasswordResetSuccessfully
         </Text>
        </Button>

        <Button onPress={() => { props.navigation.navigate("UserHome") }} style={{ height: 50, marginBottom: 25, borderRadius: 10, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>
            UserHome
         </Text>
        </Button>


        <Button onPress={() => { props.navigation.navigate("UserTaskArrived") }} style={{ height: 50, marginBottom: 25, borderRadius: 10, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>
            UserTaskArrived
         </Text>
        </Button>

        <Button onPress={() => { props.navigation.navigate("UserTaskDetails") }} style={{ height: 50, marginBottom: 25, borderRadius: 10, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>
            UserTaskDetails
         </Text>
        </Button>

        <Button onPress={() => { props.navigation.navigate("VerifyYourWorkDescription") }} style={{ height: 50, marginBottom: 25, borderRadius: 10, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>
            VerifyYourWorkDescription
         </Text>
        </Button>
        <Button onPress={() => { props.navigation.navigate("AdminCompletedTask") }} style={{ height: 50, marginBottom: 25, borderRadius: 10, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>
            AdminCompletedTask
         </Text>
        </Button>

        <Button onPress={() => { props.navigation.navigate("CreateAdmin") }} style={{ height: 50, marginBottom: 25, borderRadius: 10, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>
            CreateAdmin
         </Text>
        </Button>
        <Button onPress={() => { props.navigation.navigate("LoginScreen") }} style={{ height: 50, marginBottom: 25, borderRadius: 10, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>
            LoginScreen
         </Text>
        </Button>

        <Button onPress={() => { props.navigation.navigate("CameraPoiting") }} style={{ height: 50, marginBottom: 25, borderRadius: 10, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>
            CameraPoiting
         </Text>
        </Button>
      </ScrollView>
    </View>


  );

}
export default Home;
