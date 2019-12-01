import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainDataNav from '../../components/Navigation/MainDataNav/MainDataNav'
import MainDataTemperature from '../MainDataTemperature/MainDataTemperature'



export default function MainData() {
  return (
    <View style={styles.container}>
        <MainDataNav/>
        <MainDataTemperature/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1.03,
    backgroundColor: '#1D212C',
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
});
