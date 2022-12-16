import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { proportionedPixel } from "../../helpers/Style";
import { useNavigation } from "@react-navigation/native";
import FirebaseConfig from "../../firebase/config";
import { getDatabase, onValue, ref, set } from "firebase/database";
import styles from "./ViewVehicleStyle";


function ViewVehicle(props) {
    const navigation = useNavigation();
    console.log(props.long)
    console.log('id?', props.id);
    let long = props.long
    let lat = props.lat

    const getLocation = (id, vehicleReg) => {
        const database = getDatabase(FirebaseConfig);
        const starCountRef = ref(database, `${id}-${vehicleReg}/location`);
        onValue(starCountRef, snapshot => {
            const data = snapshot.val();
            console.log('datata', data);
            if (data) {
                navigation.navigate('Map', {
                    lat: data.latitude,
                    long: data.longitude
                })
                console.log('location', data)
            } else {
                console.log('No location data');
            }
        });
    };


    const finalFunc = (id, no) => {
        console.log('aa raha hai?', id, no)
        getLocation(id, no)
    }
    return (
        <View style={styles.mainView}>
            <View style={styles.registerView}>
                <Image source={require('../../assests/noplate.png')} style={styles.allIcons} />
                <Text style={styles.registerText}>Registeration-No:{props.registrationNumber}</Text>
            </View>
            <View style={styles.baseView}>
                <Image source={require('../../assests/fuel.png')} style={styles.allIcons} />
                <Text style={styles.typeNfuelText}>Fuel:{props.fuelDataSource}</Text>
                <Text style={styles.typeNfuelText}>Type:{props.type}</Text>
                <Image source={require('../../assests/vehicle.jpeg')} style={styles.allIcons} />
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => finalFunc(props.id, props.registrationNumber)}>
                    <Image style={styles.imageView} source={require('../../assests/location.png')} />
                </TouchableOpacity>
                <Text>View Location</Text>
            </View>
        </View>
    )
}


export default ViewVehicle;