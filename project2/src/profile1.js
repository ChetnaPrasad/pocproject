import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Image, StyleSheet, ScrollView, Alert, fontSize } from 'react-native';
import { Card } from 'react-native-elements/dist/card/Card';


import left2 from './main/assets/images/left2.png';
import avatar2 from './main/assets/images/avatar2.jpg';
import pencil from './main/assets/images/pencil.png';
import computer from './main/assets/images/computer.png';
import location1 from './main/assets/images/location1.png';
import calender3 from './main/assets/images/calender3.png';
import designation from './main/assets/images/designation.png';
import align from './main/assets/images/align.png';
import myinfo from './main/assets/images/myinfo.png';
import logout from './main/assets/images/logout.png';

import { width } from 'cli';








export default function profile({ navigation: { goBack } }) {
    return (
        <SafeAreaView>
            <ScrollView style={styles.scrollView}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={[{ width: "16%", margin: 10 ,marginVertical:20}]}>
                        <TouchableOpacity onPress={() => goBack()} title="Go back from ProfileScreen">
                            <Image 
                                source={left2}
                                style={styles.menubar}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.dashboard}>Profile</Text>

                </View>



                <View>
                    <View >
                        <View style={styles.card3}>
                            <View>
                                <View style={{ flexDirection: "row" }}>
                                    <TouchableOpacity onPress={() => { }}><Image
                                        source={avatar2}
                                        style={styles.imageavtar}
                                    />
                                    </TouchableOpacity>
                                    <View style={styles.text}>
                                        <Text style={styles.text}>
                                            DEVENDRA Rathor
                                        </Text>
                                        <Text style={styles.text}>
                                            devendrarathor@therapidhire.com
                                        </Text>
                                        <View style={styles.pencil2} >
                                            <Text >
                                                <TouchableOpacity onPress={() => { }}>

                                                    <Image
                                                        source={pencil}
                                                        style={styles.pencil}
                                                    />
                                                </TouchableOpacity>
                                            </Text>
                                        </View>

                                    </View>

                                </View>
                            </View>

                        </View>
                    </View>

                    <View>
                        <View style={styles.card1}>
                            <View style={styles.Icon2} >
                                <Text style={styles.icon} >
                                    <Image
                                        source={myinfo}
                                        style={styles.icon}
                                    />

                                </Text>
                                <Text style={styles.icon} >
                                    <Image
                                        source={designation}
                                        style={styles.icon}
                                    />

                                </Text>
                                <Text style={styles.icon} >
                                    <Image
                                        source={computer}
                                        style={styles.icon}
                                    />

                                </Text>
                                <Text style={styles.icon}>
                                    <Image
                                        source={location1}
                                        style={styles.icon}
                                    />
                                </Text>
                                <Text style={styles.icon}>
                                    <Image
                                        source={align}
                                        style={styles.icon}
                                    />

                                </Text>
                            </View>
                            <View style={styles.myinfo}>
                                <Text style={styles.text1}>
                                    My Information
                                </Text >
                                <Text style={styles.texttext}>
                                    Employee id Eic2
                                </Text>
                                <Text style={styles.text1}>
                                    Designation
                                </Text>
                                <Text style={styles.texttext}>
                                    software Developer
                                </Text>
                                <Text style={styles.text1}>
                                    Department
                                </Text>
                                <Text style={styles.texttext}>
                                    Delivery
                                </Text>
                                <Text style={styles.text1}>
                                    Location
                                </Text>
                                <Text style={styles.texttext}>
                                    indore
                                </Text>
                                <Text style={styles.text1}>
                                    Language
                                </Text>
                            </View>
                        </View>
                        <Text style={{ fontWeight: "bold", fontSize: 24, marginLeft: 20, marginTop: 20 }}>More</Text>
                        <View>
                            <View style={styles.card}>
                                <View style={styles.Icon2} >

                                    <Text style={styles.icon} >
                                        <Image
                                            source={calender3}
                                            style={styles.icon}
                                        />
                                    </Text>
                             </View>

                                <View style={styles.date}>
                                    <Text style={styles.text2}>
                                        Date of joining
                                    </Text>
                                    <Text style={styles.text2}> </Text>
                                    <Text style={styles.text2}>
                                        Logout
                                    </Text>
                                    <Text style={styles.texttext}>
                                        Designation
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    menubar: {
        width: 40,
        height: 20,
        marginVertical: 'auto',
        marginLeft: 5,
        marginRight: 10,
    },
    dashboard: {
        fontSize: 30,
        padding: 10,
        marginTop: 0,
    },
    card: {

        borderWidth: 6,
        borderRadius: 10,
        borderColor: 'white',
        width: 350,
        height: 100,
        padding: 0,
        backgroundColor: "white",
        marginTop: 30,
        marginLeft: 20
    },
    card3: {

        borderWidth: 6,
        borderRadius: 10,
        borderColor: '#0fabdb',
        width: 350,
        height: 100,
        padding: 0,
        backgroundColor: "#0fabdb",
        marginTop: 30,
        marginLeft: 20
    },
    card1: {

        borderWidth: 6,
        borderRadius: 10,
        borderColor: 'white',
        width: 350,
        height: 400,
        padding: 0,
        backgroundColor: "white",
        marginTop: 30,
        marginLeft: 20
    },
    imageavtar: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        borderWidth: 3,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "grey",
        marginVertical: 10,
        marginLeft: "auto",
        marginRight: -5,
        borderColor: 'white',
        borderWidth: 2,

    },
    text: {
        marginLeft: 8,
        marginTop: 8,
        color: "white",

    },
    pencil: {
        width: 20,
        maxHeight: 20,
        marginTop: 20,
        marginLeft: 250,
    },
    pencil2: {
        marginTop: -50,
    },
    text1: {
        fontSize: 20,
        fontWeight: "600",
        fontcolor: 'bold',
        marginLeft: 55,
        marginTop: 30,
    },
    text2: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 55,
        marginTop: 5,
    },
    date: {
        marginTop: -30
    },
    texttext: {
        fontcolor: "lightwhite",
        marginLeft: 55,
        marginTop: 10
    },
    Icon2: {
        marginTop: -67
    },
    icon: {
        width: 30,
        height: 30,
        backgroundColor:"#fff",
        marginVertical: 'auto',
        marginLeft: 5,
        marginRight: 10,
        marginTop: 60

    },
    scrollView: {
        //backgroundColor: 'pink',
        //marginHorizontal: 0,
    },
    myinfo: {
        marginTop: -410
    }

});