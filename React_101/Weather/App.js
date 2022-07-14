import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, ScrollView, Dimensions, ActivityIndicator, ImageBackground, Image } from 'react-native';
import * as Location from 'expo-location';
import { API_KEY, URL } from './config.json';
import { Fontisto } from '@expo/vector-icons';

const Screen_width = Dimensions.get("window").width;
// const {width: Screen_width} = Dimensions.get("window");

const icons = {
  "Clouds": "cloudy",
  "Rain": "rains",
  "Clear": "day-sunny",
  "Atmosphere": "cloudy-gusts",
  "Snow": "snows",
  "Drizzle": "rain",
  "Thunderstorm": "lightning"
}


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
    days.map((item, index) => console.log(`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`))
  }

  useEffect(() => {
    getWeather();
  }, [])
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.container} source={{ uri: URL }}>
        <StatusBar style='dark' />
        <View style={{ ...styles.city_cotainer }}>
          <Text style={styles.cityName}>{location.region}</Text>
          <Text style={styles.cityName}>{location.city} {location.street}</Text>
        </View>
        <ScrollView
          pagingEnabled
          horizontal
          // indicatorStyle='white' // (ios only) ScrollIndicator can change the color into  black, white and default: same as black.
          showsHorizontalScrollIndicator={false} // ScrollIndicator delete.
          contentContainerStyle={styles.wather_container}>
          {days.length === 0 ? <View style={{ ...styles.day_container, alignItems: "center" }}><ActivityIndicator style={{ marginTop: 10 }} size="large" color={"white"} /></View> : (
            days.map((days, index) =>
              <View key={index} style={styles.day_container}>
                <View style={styles.day_wrapper}>
                  <Text style={styles.temp}>{Math.round(days.temp.day)}°C</Text>
                  {/* <Fontisto name={icons[days.weather[0].main]} size={50} color="black" /> */}
                  <Image source={{ uri: `https://openweathermap.org/img/wn/${days.weather[0].icon}@2x.png` }} style={{ width: 100, height: 50 }} />
                </View>
                <Text style={styles.weather_desc}>{days.weather[0].main}</Text>
                <Text style={styles.desc}>{days.weather[0].description}</Text>
              </View>
            )
          )}

        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  city_cotainer: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center"
  },
  cityName: {
    fontSize: 38,
    fontWeight: "600"
  },
  day_container: {
    width: Screen_width,
    alignItems: "flex-start",
    paddingHorizontal: 20,
  },
  day_wrapper: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    width: "70%"
  },
  temp: {
    fontSize: 80,
    fontWeight: "600",
    marginTop: 50
  },
  weather_desc: {
    fontSize: 50,
    fontWeight: "600"
  },
  desc: {
    fontSize: 20,
    fontWeight: "600"
  }
});