import React from 'react';
import { StyleSheet, View } from 'react-native';
import ToggleTemperature from '../../components/ToggleTemperature/ToggleTemperature'
import FooterTemperature from '../../components/FooterTemperature/FooterTemperature'



export default function MainDataTemperature() {
  return (
    <View style={styles.container}>
        <ToggleTemperature/>
        <FooterTemperature/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1.4,
  },
});