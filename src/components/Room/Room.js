import React from 'react';
import { StyleSheet, Text, View } from 'react-native';




export default function Room() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Гостинная</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#040814',
  },
  text: {
      color: 'white',
      fontStyle: 'montserratregular'
  }
});
