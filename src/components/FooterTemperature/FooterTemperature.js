import React from 'react';
import { StyleSheet, View } from 'react-native';
import CurrentTemperature from '../CurrentTemperature/CurrentTemperature';
import OutsideWeather from '../OutsideWeather/OutsideWeather';


export default function FooterTemperature() {
  return (
    <View style={styles.container}>
      <CurrentTemperature/>
      <OutsideWeather/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
