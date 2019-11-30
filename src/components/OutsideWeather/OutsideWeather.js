import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import SvgUri from 'react-native-svg-uri';




export default function OutsideWeather() {
  return (
    <View style={styles.left}>
      <View style={styles.container}>
        <View style={styles.outsideWeather}>
          <View style={styles.outsideWeatherImg}>
            <SvgUri 
                height = '21'
                source={require('../../img/MainDataTemperature/weather.svg')}
            />
          </View>
            <Text style={styles.outsideWeatherText}>11°C</Text>
        </View>
          <Text style={styles.currentCity}>Санкт Петербург</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  left: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: 'center'
  },
  outsideWeather: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  outsideWeatherImg: {
    width: 17, 
    paddingBottom:5
  },
  outsideWeatherText: {
    marginLeft: 10,
    color: '#A0A7C2',
    fontSize: 30,
    fontFamily: 'montserrat-regular',
    textAlignVertical: 'bottom',
    includeFontPadding: false,
  },
  currentCity: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'montserrat-regular',
  },
});
