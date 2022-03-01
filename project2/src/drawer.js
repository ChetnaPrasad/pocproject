import * as React from 'react';
import { useState } from 'react';
import { Button, View, Text, TouchableOpacity, style, StyleSheet, Dimensions, SafeAreaView, Image, Connected, dateString, days } from 'react-native';
import { Card } from 'react-native-elements';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SceneMap } from 'react-native-tab-view';

import avatar from './main/assets/images/avatar3.jpg';
import attendance from './main/assets/images/attendance.png';
import leave from './main/assets/images/leave.png';
import punchinout from './main/assets/images/punchinout.png';
import home from './main/assets/images/home.png';
import file from './main/assets/images/file.png';
import cloud from './main/assets/images/cloud.png';
import clean from './main/assets/images/clean.png';
import CustomDrawer from './CustomDrawer';

const AttendanceRoute = () => (
  <View style={[styles.scene, { backgroundColor: 'white' }]} />
);

const LeaveRoute = () => (
  <View style={[styles.scene, { backgroundColor: 'white' }]} />
);

const EditRoute = () => (
  <View style={[styles.scene, { backgroundColor: 'white' }]} />
);
const ConnectionRoute = () => (
  <View style={{ backgroundColor: Connected ? 'green' : 'red' }} />
);




const initialLayout = { width: Dimensions.get('window').width };

const renderScene = SceneMap({
  Attendance: AttendanceRoute,
  Leave: LeaveRoute,
  Edit: EditRoute,
  Connection: ConnectionRoute,
});
function HomeScreen({ navigation }) {

  const [visible, setVisible, setModalVisible, ModalVisible] = useState(false);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Attendance', title: 'Attendance' },
    { key: 'Leave', title: 'Leave' },
    { key: 'Edit', title: 'Edit' },
    { key: 'Connection', title: 'Connection' },
  ]);
  const [currentDate, setcurrentDate, displayTime] = React.useState('')
  const [btnView, setBtnView] = React.useState('hidden')

  React.useEffect(() => {

    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var dayName = days[new Date().getDay()];
    var month = ["Jan", "Feb", "March", "April", "May", "Jun", "July", "Aug", "sep", "oct", "Nov", "Dec"];
    var monthName = month[new Date().getMonth()];
    var localTime = new Date();
    var month = localTime.getMonth() + 1;
    var date = localTime.getDate();
    var year = localTime.getFullYear();
    var hours = localTime.getHours();
    var minutes = localTime.getMinutes();
    var seconds = localTime.getSeconds();

    setcurrentDate(
      dayName + "," + date + " " + monthName + " " + year + "    \n        " + hours + ":" + minutes + ":" + seconds + ""
    );

  })
  const punchInClicked = (btnName) => {
    if (btnName === 'punchIn') {
      setBtnView('show')
    }
    else {
      setBtnView('hidden')
    }
  }

  const detectPunchIn = () => {
    if (btnView !== 'hidden') {
      return (<View>
        <Button style={styles.break} title="Break" onPress={() => { punchInClicked('showAlert') }}></Button>
        <Button style={styles.break} title="PUNCH-OUT" onPress={() => { punchInClicked('punchOut') }}></Button>
      </View>)
    } else {
      return (
        <View style={styles.punchinbuttn} >
          <Button
            title="PUNCH-IN"
            onPress={() => { punchInClicked('punchIn') }}
          />
        </View>
      )
    }

  }

  return (
    <><SafeAreaView>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.dashboard}>Dashboard</Text>
        <TouchableOpacity onPress={() => navigation.openDrawer({ NotificationsScreen })}>
          <Image
            style={styles.imageavtar}
            source={avatar} />
        </TouchableOpacity>
      </View>

      <View
        style={styles.Connected}>
      </View>

      <Card style={styles.card}>
        <View >
          <View >
            <Text style={styles.textcurrent}>
              {currentDate}
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <View >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Clock-In_Time</Text>

          </View>
          <View>
            <Text style={{ fontSize: 20, marginLeft: 60, fontWeight: "bold" }}>Clock-Out_Time</Text>

            <View />
          </View>
        </View>

        {detectPunchIn()}

      </Card>

      <View >
        <TouchableOpacity onPress={() => { alert("this is attendance ") }}>
          <Card style={styles.card}>
            <View style={{ flexDirection: "row" }}><Image
              source={attendance}
              style={styles.attendance}
            />
              <Text style={styles.textattendance}>
                Panding Request
              </Text>
            </View>
          </Card>
        </TouchableOpacity>
      </View>

      <View >
        <TouchableOpacity onPress={() => { alert("this is attendance ") }}>
          <Card style={styles.card}>
            <View style={{ flexDirection: "row" }}><Image
              source={attendance}
              style={styles.attendance}
            />
              <Text style={styles.textattendance}>
                Attendance
              </Text>
            </View>
          </Card>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('leavebalance', { name: 'leavebalance' });
          }}>
          <Card style={styles.card}>
            <View style={{ flexDirection: "row" }}><Image
              source={leave}
              style={styles.leave} />
              <Text style={styles.textleave}>
                Leave
              </Text>
            </View>
          </Card>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", marginTop: 140 }}>
        <View style={{}}>
          <TouchableOpacity onPress={() => { }}><Image
            source={home}
            style={styles.home}
          />
          </TouchableOpacity>

        </View><View style={{ marginLeft: 70 }}>
          <TouchableOpacity onPress={() => { }}><Image
            source={file}
            style={styles.file}
          />
          </TouchableOpacity>
        </View><View style={{ marginLeft: 70 }}>
          <TouchableOpacity onPress={() => { }}><Image
            source={cloud}
            style={styles.cloud}
          />
          </TouchableOpacity>
        </View><View style={{ marginLeft: 70 }}>
          <TouchableOpacity onPress={() => { }}><Image
            source={clean}
            style={styles.clean}
          />
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
    </>

  );
};
function NotificationsScreen({ navigation }) {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    navigation.dispatch(navigateAction);
  };
  return (
    <View></View>
  );
}
const Drawer = createDrawerNavigator();
export default function App() {
  return (

    <Drawer.Navigator drawerContent={props => <CustomDrawer{...props} />} screenOptions={{
      headerShown: false,
    }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />

    </Drawer.Navigator>

  );
}

const styles = StyleSheet.create({

  scene: {
    flex: 1,
  },
  card: {
    flex: 1,
    flexDirection: "row",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  punchoutbuttn: {

    marginBottom: 20,
    padding: 30
  },
  buttonspace: {
    width: 50,
    height: 20,
  },
  menubar: {
    width: 30,
    height: 30,
    marginVertical: 10,
    marginLeft: 5,
    marginRight: 10
  },
  imageavtar: {
    width: 65,
    height: 65,
    borderRadius: 65 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "grey",
    marginVertical: 10,
    marginLeft: -250,
    borderColor: 'black',
    borderWidth: 2,

  },
  Connected: {
    marginLeft: 60,
    marginTop: -25,
    width: 20,
    height: 20,
    backgroundColor: Connected ? 'green' : 'red',
    borderRadius: 20 / 2,
    borderColor: 'black',
    borderWidth: 2,
  },
  textcurrent: {
    fontSize: 24,
    marginLeft: 70,
    marginTop: 10,
    fontWeight: "bold"
  },
  attendance: {
    width: 30,
    height: 30,
    marginVertical: 10,
    marginLeft: 5,
    marginRight: 10
  },
  textattendance: {
    fontSize: 24,
    marginLeft: 1,
    marginTop: 10,
    fontWeight: "bold",
  },
  leave: {
    width: 30,
    height: 30,
    marginVertical: 10,
    marginLeft: 5,
    marginRight: 10
  },
  textleave: {
    fontSize: 24,
    marginLeft: 1,
    marginTop: 10,
    fontWeight: "bold",
  },
  home: {
    width: 30,
    height: 30,
    marginVertical: 10,
    marginLeft: 5,
    marginRight: 10
  },
  file: {
    width: 30,
    height: 30,
    marginVertical: 10,
    marginLeft: 5,
    marginRight: 10
  },
  cloud: {
    width: 30,
    height: 30,
    marginVertical: 10,
    marginLeft: 5,
    marginRight: 10
  },
  clean: {
    width: 30,
    height: 30,
    marginVertical: 10,
    marginLeft: 5,
    marginRight: 10
  },
  dashboard: {
    marginLeft: 100,
    fontSize: 30,
    padding: 10,
    marginTop: 10,
  },
  punchinbuttn: {
    marginTop: 60,
  },
  modalHeaderCloseText: {
    alignItems: 'flex-end',
    marginTop: 0,
  },
  closeText: {
    color: 'blue',
    borderRadius: 20,
    fontSize: 20,
    padding: 10,
    marginTop: 10,
  },
  break: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }

});