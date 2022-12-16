import React, { useEffect, useLayoutEffect, useState } from "react";
import { ScrollView, View, TextInput, StyleSheet, Image, ActivityIndicator } from 'react-native';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "./ListStyle";
import ViewVehicle from "../../components/ViewVehicle/ViewVehicle";

function List() {
  const [vehiclesOne, setVehiclesOne] = useState([]);
  const [search, setSearch] = useState('');
  const [token, setToken] = useState();
  const [filterData, setFilterData] = useState([]);
  const [activity, setActivity] = useState(true);

  useLayoutEffect(() => {
    getToken();
    if (token) {
      console.log('axios me', token);
      axios
        .get(`https://staging-api.tracknerd.io/v1/vehicle-groups/vehicles`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setActivity(false)
          console.log(res.data.data)
          setVehiclesOne(res.data.data[0].vehicles);
          setFilterData(res.data.data[0].vehicles);
        })
        .catch((err) => {
          console.log('error', err)
        })
    }
  })


  const getToken = async () => {
    try {
      const savedToken = await AsyncStorage.getItem("token");
      const currentToken = savedToken;
      console.log('listscreen', currentToken);
      setToken(currentToken);
    } catch (error) {
      console.log(error);
    }
  };

  const filterHelper = text => {
    if (text) {
      const newData = vehiclesOne.filter(item => {
        const itemData = item.registrationNumber
          ? item.registrationNumber.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setSearch(text);
    } else {
      setFilterData(vehiclesOne);
      setSearch(text);
    }
  };


  return (
    <View style={styles.mainView}>
      {activity ? <ActivityIndicator size="large" color="black" animating={activity} /> :
        <>
          <View style={styles.textIPBar}>
            <Image source={require('../../assests/search.png')} style={styles.searchIcon} />
            <TextInput
              placeholder="search"
              style={styles.textIp}
              onChangeText={(text) => filterHelper(text)}
              value={search}
              placeholderTextColor='black' />
          </View>
          <ScrollView>
            {filterData.map((item) => (
              <View>
                <ViewVehicle
                  vehicleNumber={1}
                  id={item.id}
                  fuelDataSource={item.fuelDataSource}
                  registrationNumber={item.registrationNumber}
                  type={item.type}
                />
              </View>
            ))
            }
          </ScrollView>
        </>
      }


    </View>
  )
}




export default List;
