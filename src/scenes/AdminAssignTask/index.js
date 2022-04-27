import React, {Component} from 'react';
import {View, SafeAreaView, Text, ScrollView, Alert} from 'react-native';
import style from './style';
import {connect} from 'react-redux';

import {StackActions, NavigationActions} from 'react-navigation';
import Input from '../../Components/Common/Input';
import MemberRow from '../../Components/Common/MemberRow';
import {Button} from 'native-base';
import {verticalScale, scale} from '../../Utils/scaling';
import {allCompanyEmployees} from '../../redux/selectors';
import {getCompanyEmployees} from '../../redux/actions/employeeActions';

class AdminAssignTask extends Component {
  constructor(props) {
    super(props);

    this.mounted = false;

    this.state = {
      searchedValue: '',
      clicked: false,
      searchedArray: [],
    };
  }

  handleGoBack = () => {
    const resetAction = StackActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({routeName: 'Home'}),
        NavigationActions.navigate({routeName: 'AdminCreateNewTask'}),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  };

  onAssignTaskPress = () => {
    const employee = this.state.searchedArray.filter(item => {
      if (item.pressed) return item;
    });
    const {navigation} = this.props;
    navigation.goBack();
    navigation.state.params.onSelectedEmployee(employee[0]);
  };

  renderMembers = () => {
    return (
      this.mounted &&
      this.state.searchedArray.map((item, i) => (
        <MemberRow
          pressedColor={'#0B47BB'}
          key={i}
          source={item.attributes.avatar}
          onPress={() => {
            this.onHandleMemberPress(i);
          }}
          text={item.attributes.email}
          pressed={item.pressed}
        />
      ))
    );
  };

  componentDidMount = () => {
    this.mounted = true;
    const {navigation} = this.props;
    const employee = navigation.getParam('employee', {});
    this.props.getCompanyEmployees(
      {params: undefined},
      response => {
        if (employee !== undefined) {
          this.setState({clicked: true});
          response.map(item => {
            if (item.email === employee.email) {
              return (item.pressed = true);
            }
          });
        }
        this.setState({searchedArray: response});
      },
      () => {
        Alert.alert('Error', 'Something went wrong ! Please try again later');
      },
    );
  };

  componentWillUnmount = () => {
    this.mounted = false;
  };

  onChangeSearchText = value => {
    const {employees} = this.props.employee;
    let str = '' + value;
    let tempArr = [];
    this.mounted &&
      this.setState({searchedValue: str.trim()}, () => {
        employees.map(item => {
          if (
            item.attributes.email
              .trim()
              .toLowerCase()
              .includes(str.trim().toLowerCase())
          ) {
            tempArr.push(item);
            return;
          }
        });
        this.mounted &&
          this.setState(
            {
              searchedArray:
                this.state.searchedValue.length <= 0 ? employees : tempArr,
            },
            () => {
              console.log('Lengthi :', str.length);
            },
          );
      });
  };
  onHandleMemberPress = index => {
    const {employees} = this.props.employee;
    this.state.searchedArray.map((item, i) => {
      if (index === i) {
        item.pressed = !item.pressed;
        return item;
      }
      item.pressed = false;
      return item;
    });

    let clicked = this.state.searchedArray.filter(item =>
      item.pressed ? true : false,
    );
    this.mounted &&
      this.setState({clicked: clicked.length >= 1}, () => {
        if (!this.state.clicked) {
          employees.map(item => (item.pressed = false));
        } else {
          employees.map((item, i) => {
            if (this.state.searchedArray[index].email !== employees[i].email) {
              return (item.pressed = false);
            }
          });
        }
      });
  };
  render() {
    return (
      <View style={style.container}>
        <SafeAreaView style={style.main_content}>
          <ScrollView style={{paddingHorizontal: scale(20)}}>
            <View style={{flex: 1, paddingBottom: verticalScale(15)}}>
              <View style={style.search_view}>
                <Text style={style.search_text}>Current Members</Text>
                <Input
                  onChange={this.onChangeSearchText}
                  value={this.state.searchedValue}
                  placeholder={'Search for members…'}
                />
              </View>
              {this.renderMembers()}
            </View>
          </ScrollView>
          {this.state.clicked && (
            <View style={style.view_btn}>
              <Button onPress={this.onAssignTaskPress} style={style.btn_assign}>
                <Text style={style.btn_assign_text}>Assign Task</Text>
              </Button>
            </View>
          )}
        </SafeAreaView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  employee: allCompanyEmployees(state),
});

const mapDispatchToProps = dispatch => ({
  getCompanyEmployees: (params = {}, onSuccess, onFail) =>
    dispatch(getCompanyEmployees({params, onSuccess, onFail})),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminAssignTask);
