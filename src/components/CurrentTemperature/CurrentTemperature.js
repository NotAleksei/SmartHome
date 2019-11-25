import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';




export default function CurrentTemperature() {
  return (
    <View style={styles.left}>
      <View style={styles.container}>
        <View style={styles.currentTemp}>
          <View style={styles.currentTempImg}>
            <Image
                source={require('../../img/MainDataTemperature/temp.png')}
            ></Image>
          </View>
            <Text style={styles.currentTempText}>21°C</Text>
        </View>
          <Text style={styles.currentText}>текущая</Text>
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
  currentTemp: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  currentTempImg: {
    width: 17, 
    paddingBottom:5
  },
  currentTempText: {
    marginLeft: 5,
    color: '#A0A7C2',
    fontSize: 30,
    textAlignVertical: 'bottom',
    includeFontPadding: false,
  },
  currentText: {
    color: 'white',
    fontSize: 12
  },
});
