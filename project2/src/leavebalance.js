import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, header, ScrollViewComponent } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';


import left2 from './main/assets/images/left2.png';
import { Card } from 'react-native-elements/dist/card/Card';
import { color } from 'react-native-reanimated';


const holidayList = [
    { date: '24-02-2022', holidayName: 'Holi' },
    { date: '24-02-2022', holidayName: 'Holi' },
    { date: '24-02-2022', holidayName: 'Holi' },
    { date: '24-02-2022', holidayName: 'Holi' },
    { date: '24-02-2022', holidayName: 'Holi' },
    { date: '24-02-2022', holidayName: 'Holi' },
    { date: '24-02-2022', holidayName: 'Holi' },
    { date: '24-02-2022', holidayName: 'Holi' },
    { date: '24-02-2022', holidayName: 'Holi' },
    { date: '24-02-2022', holidayName: 'Holi' },
    { date: '24-02-2022', holidayName: 'Holi' },
    { date: '24-02-2022', holidayName: 'Holi' },
    { date: '24-02-2022', holidayName: 'Holi' },
    { date: '24-02-2022', holidayName: 'Holi' },
    { date: '24-02-2022', holidayName: 'Holi' },
    { date: '24-02-2022', holidayName: 'Holi' },]


const FirstRoute = () => (
    <View>
        <View style={styles.card1}>
            <View>
                <Text style={{ fontSize: 25, marginTop: 20, marginLeft: 15, fontWeight: "bold" }}>
                    Contractor Leave
                </Text>
            </View>
            <View>

                <Text style={styles.text3}>
                    2.00</Text>
                <Text style={styles.text4}>
                    Currently Available  </Text></View>

            <View style={{ marginTop: 60 }}>
                <View style={{
                    borderBottomColor: 'black',

                    borderWidth: 0.5,
                    width: 300,
                    marginLeft: 15,
                    marginTop: -50

                }}>
                    <></>
                </View>
                <View style={styles.cardleave}>

                    <Text style={styles.leavetext}>
                        1.0
                    </Text>
                    <Text style={styles.leavetext2}>
                        Added this month
                    </Text>

                </View>
                <View style={styles.cardleave} >

                    <Text style={styles.leavetext}>
                        1.00
                    </Text >
                    <Text style={styles.leavetext2} >
                        Carry forward
                    </Text>

                </View>
                <View style={styles.cardleave} >

                    <Text style={styles.leavetext}>
                        12.00
                    </Text>
                    <Text style={styles.leavetext2}>
                        year-end balance
                    </Text>

                </View>
            </View>
        </View>
    </View>
);

const SecondRoute = () => (
    <ScrollView>
        <View style={styles.holiday}>

            {holidayList.map(item => (
                <>
                    <View style={styles.listcard}>
                        <Text>
                            {item.date}
                        </Text>
                    </View>
                    <View style={styles.listcard2}>
                        <Text>
                            {item.holidayName}
                        </Text>
                    </View>
                </>
            ))}
        </View>
    </ScrollView>
);


const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
});

export default function balanceleave({ navigation: { goBack } }) {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Leave  Balance' },
        { key: 'second', title: 'List Of Holiday' },
    ]);


    return (

        <>
           <View style={{ flexDirection: 'row'}}>
                    <View style={[{ width: "16%", margin: 10 ,marginVertical:20}]}>
                        <TouchableOpacity onPress={() => goBack()} title="Go back from ProfileScreen">
                            <Image 
                                source={left2}
                                style={styles.menubar}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.leave}>Leave</Text>

                </View>

            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }} />
        </>

    );
}



const styles = StyleSheet.create({
    menubar: {
        width: 40,
        height: 40,
        marginVertical: 'auto',
        marginLeft: 5,
        marginRight: 10,
    },
    profile: {
        fontSize: 30,
        padding: 10,
        marginTop: 10,
    },
    card1: {

        borderWidth: 6,
        borderRadius: 10,
        borderColor: 'white',
        width: 360,
        height: 400,
        padding: 0,
        backgroundColor: "white",
        marginTop: 30,
        marginLeft: 15
    },
    cardleave: {
        borderWidth: 1,
        borderRadius: 20,
        height: 70,
        width: 310,
        marginTop: 10,
        marginLeft: 10,
    },
    text3: {
        marginTop: 30,
        marginLeft: 15,
    },
    text4: {
        marginLeft: 90,
        marginTop: -18,
        color: "lightgray"
    },
    leavetext: {
        marginLeft: 10,
        marginTop: 20,
        color: "lightgray"
    },
    leavetext2: {
        marginLeft: 80,
        fontSize: 20,
        marginTop: -22,
        color: "lightgray"

    },
    listcard: {
        width: 110,
        height: 50,
        borderRadius: 5,
        backgroundColor: "#00A4E6",
        marginLeft: 5,
        flex: 1,
        justifyContent: 'space-evenly',
        marginTop: 10

    },
    listcard2: {
        width: 250,
        height: 50,
        borderRadius: 5,
        backgroundColor: "white",
        marginLeft: 130,
        marginTop: -50,
        flex: 1,
        justifyContent: 'space-evenly'
    },
    holiday: {
        marginTop: 10,
        flex: 1,
        justifyContent: 'space-evenly'
    },
    leave: {
        marginLeft: 50,
        fontSize: 30,
        padding: 10,
        marginTop: 5,
      },
      menubar: {
        width: 40,
        height: 20,
        marginVertical: 'auto',
        marginLeft: 5,
        marginRight: 10,
        marginTop:5
    },
});

