import React, { useState } from "react";
import {
  Alert,
  Button,
  ImageBackground,
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  ActivityIndicator
} from "react-native";

const image = require("./assets/snow.png");
const getLocation = async (keyword) => {
  // const  keyword = "Nguyen Trai"
  const url = "https://geocoding-api.open-meteo.com/v1/search?name=" + keyword;

  const res = await (await fetch(url)).json();
  if (res.results) {
    const loc = {
      name: res.results[0].name + ", " + res.results[0].admin1,
      latitude: res.results[0].latitude,
      longitude: res.results[0].longitude,
    };
    return loc;
  } else {
    throw err("Place not found");
  }
};

const getWeather = async (lat, long) => {
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=" +
    lat +
    "&longitude=" +
    long +
    "&current_weather=true";
  let res = null;
  try {
    res = await (await fetch(url)).json();
    return res.current_weather;
  } catch {
    throw err("Place not found");
  }
};
// const images = {
//   Default: require("./assets/snow.png"),
//   "Partly Cloudy": require("./assets/overcast.jpg"),
// };


const db = {
  0: ["Clear sky", require("./assets/clear.jpg"), "#000"],
  1: ["Mainly clear", require("./assets/light-cloud.jpg"), "#000"],
  2: ["Partly cloudy", require("./assets/cloudy.jpg"), "#000"],
  3: ["Overcast", require("./assets/overcast.jpg"), "#000"],
};
const interpretWeather = (code) => {
  if (db["" + code]) { // db["" + code] => db['code'] convert to string 
    return db["" + code][0];
  } else {
    return code;
  }
};

const getWeatherBG = (code) => {
  if (db["" + code]) {
    return db["" + code][1];
  } else {
    return require("./assets/light-cloud.png");
  }
};

const Weather = () => {
  const [hidden, setHidden] = useState(false);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState({
    cityName: "City Name",
    weather: "Loading...",
    temp: "0",
  });
  // const interpretWeather =(code) =>{
  //   if(code == 1) return 'clear sky'
  //   if(code >= 1 && code <= 3) return 'Partly Cloudy'
  //   else if(code == 45 || code == 48) return 'Fog'
  //   else return  code
  // }

  // const getPicture = (weather)=>{
  //   const result = interpretWeather(weather)
  //   console.log(result)
  //   if(images[result]) {
  //     return images[result]
  //   }else{
  //     return images[Default]
  //   }
  // }
  return (
    <ImageBackground
      source={getWeatherBG(weatherData.weather)}
      style={styles.imgBG}
    >
      <KeyboardAvoidingView
        style={styles.mainArea}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <StatusBar hidden={hidden} />
        <ActivityIndicator animating={loading} size="large" />
        <View style={styles.someView}>
          <Text style={styles.textCity}>{weatherData.cityName}</Text>
          <Text style={styles.textWeather}>
            {interpretWeather(weatherData.weather)}
          </Text>
          <Text style={styles.textTemperature}>{weatherData.temp}°</Text>
          <TextInput
            value={city}
            onChangeText={setCity}
            placeholder="Search any city"
            style={styles.txtInput}
            onSubmitEditing={async () => {
              setLoading(true);
              try {
                const loc = await getLocation(city);
                const weatherObj = await getWeather(
                  loc.latitude,
                  loc.longitude
                );
                setWeatherData({
                  cityName: loc.name,
                  weather: weatherObj.weathercode,
                  temp: weatherObj.temperature,
                });
              } catch (err) {
                Alert.alert(err.message);
              }
              setLoading(false);
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mainArea: {
    flex: 1,
    justifyContent: "center",
  },
  someView: {
    fontSize: 200,
    alignItems: "center",
    paddingHorizontal: "15%",
  },
  imgBG: {
    flex: 1,
  },
  textCity: {
    fontSize: 40,
    color: "white",
  },
  textWeather: {
    fontSize: 20,
    padding: 10,
    color: "white",
  },
  textTemperature: {
    fontSize: 30,
    padding: 5,
    color: "white",
  },
  txtInput: {
    backgroundColor: "#c0c0c0",
    padding: 8,
    borderRadius: 6,
    width: 250,
    justifyContent: "center",
  },
});

export default Weather;
