import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import style from './style';
import Input from '../../Components/Common/Input';
import MemberRow from '../../Components/Common/MemberRow';
import {Button} from 'native-base';
import {isEmpty} from 'lodash';
import Modal from 'react-native-modal';
import CardContainer from '../../Components/Common/CardContainer';
//Redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as employeeActions from '../../redux/actions/employeeActions';
import {getCompanyEmployees} from '../../redux/selectors/index';
import {successMessage, errorMessage} from '../../Utils/alerts';

const AdminMembers = props => {
  const [clicked, setClicked] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [valueSearch, setValueSearch] = useState(null);

  useEffect(() => {
    props.employeeActions.getCompanyEmployees({
      onFail: error => {
        errorMessage({message: error.errorMessage});
      },
    });
  }, []);

  useEffect(() => {
    props.navigation.setParams({deleteShow: clicked});
  }, [clicked]);

  const onPressShowDeleteModal = () => {
    setDeleteModalVisible(true);
  };

  const onHandleDeleteModal = () => {
    // deleting members
    props.employeeActions.deleteCompanyEmployee({
      params: {id: selectedEmployee},
      onSuccess: () => {
        setSelectedEmployee(null);
        setClicked(false);
        successMessage({message: 'Employee deleted successfully!'});
        setDeleteModalVisible(false);
      },
      onFail: error => {
        errorMessage({message: error.errorMessage});
      },
    });
  };

  const onHandleMemberPress = index => {
    props.navigation.setParams({deleteMemberPress: onPressShowDeleteModal});
    props.employees = props.employees.map((item, _index) => {
      item.pressed = _index === index ? !item.pressed : false;
    });
    setSelectedEmployee(props.employees[index].id);
    setClicked(props.employees[index].pressed);
  };

  return (
    <SafeAreaView style={style.container}>
      <SafeAreaView style={style.main_content}>
        <View style={style.search_view}>
          <Text style={style.search_text}>Manage Current Members</Text>
          <Input
            value={valueSearch}
            onChangeText={_valueSearch => {
              setValueSearch(_valueSearch);
            }}
            placeholder={'Search for members…'}
          />
        </View>
        <FlatList
          style={{flex: 1}}
          data={props.employees}
          contentContainerStyle={{flexGrow: 1}}
          renderItem={({item, index}) => (
            <MemberRow
              keyExtractor={_item => _item.id}
              source={
                isEmpty(item.avatar)
                  ? require('../../assets/images/profile_image.png')
                  : {uri: item.avatar}
              }
              onPress={() => {
                onHandleMemberPress(index);
              }}
              pressedColor={'#BB0B0B'}
              text={item.email}
              pressed={item.pressed}
            />
          )}
        />
      </SafeAreaView>
      <Modal
        animationIn="fadeIn"
        animationOut="fadeOut"
        isVisible={deleteModalVisible}
        onBackdropPress={() => {
          setDeleteModalVisible(false);
        }}>
        <CardContainer style={style.cardContainer}>
          <View style={style.cardWrapper}>
            <Text style={style.modal_title}>
              Are you sure you want to delete?
            </Text>
            <View style={style.modal_view_content}>
              <Text style={style.modal_content}>
                This action will permanently delete selected members.
              </Text>
            </View>
            <Button
              onPress={() => onHandleDeleteModal()}
              style={style.modal_delete}>
              <Text style={style.text_delete}>Delete</Text>
            </Button>
            <Button
              onPress={() => {
                setDeleteModalVisible(false);
              }}
              style={style.modal_cancel}>
              <Text style={style.text_cancel}>Cancel</Text>
            </Button>
          </View>
        </CardContainer>
      </Modal>
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    employees: getCompanyEmployees(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    employeeActions: bindActionCreators(employeeActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminMembers);
