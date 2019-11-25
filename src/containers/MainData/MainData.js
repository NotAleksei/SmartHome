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
  },
});
