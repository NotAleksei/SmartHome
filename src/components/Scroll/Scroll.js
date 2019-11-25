import React from 'react';
import { StyleSheet, Image, View } from 'react-native';




export default function Scroll() {
  return (
    <View style={styles.container}>
        <Image
            style={styles.image}
            source={require('../../img/carousel/group.png')}
        ></Image>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.23,
    backgroundColor: '#1c1e29',
    justifyContent: 'center',
    alignItems: 'center'
  },
  teximaget: {
      marginLeft:5,
  }
});
