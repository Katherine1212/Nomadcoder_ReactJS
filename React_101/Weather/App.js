import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView, Dimensions, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import { API_KEY } from './properties.json';
const Screen_width = Dimensions.get("window").width;
// const {width: Screen_width} = Dimensions.get("window");

export default function App() {
  const [location, setLocation] = useState("Loading...");
  const [days, setDays] = useState([]);
  const [ok, setOk] = useState(true);
  const getWeather = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
    const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const my_location = await Location.reverseGeocodeAsync({ latitude, longitude }, { useGoogleMaps: false });
    setLocation(my_location[0]);
    const resp = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&units=metric&appid=${API_KEY}`);
    const json = await resp.json();
    setDays(json.daily);
  }

  useEffect(() => {
    getWeather();
  }, [])
  return (
    <View style={styles.container}>
      <View style={styles.city_cotainer}>
        <Text style={styles.cityName}>{location.region} {location.city}</Text>
      </View>
      <ScrollView
        pagingEnabled
        horizontal
        // indicatorStyle='white' // (ios only) ScrollIndicator can change the color into  black, white and default: same as black.
        showsHorizontalScrollIndicator={false} // ScrollIndicator delete.
        contentContainerStyle={styles.wather_container}>
        {days.length === 0 ? <View style={styles.day}><ActivityIndicator style={{ marginTop: 10 }} size="large" color={"white"} /></View> : (
          days.map((days, index) =>
            <View key={index} style={styles.day}>
              <Text style={styles.temp}>{Math.round(days.temp.day)}°C</Text>
              <Text style={styles.desc}>{days.weather[0].main}</Text>
            </View>
          )
        )}

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green"
  },
  city_cotainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  cityName: {
    fontSize: 38,
    fontWeight: "500"
  },
  day: {
    width: Screen_width,
    alignItems: "center"
  },
  temp: {
    fontSize: 100,
    fontWeight: "600",
    marginTop: 50
  },
  desc: {
    fontSize: 50
  }
});