import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../containers/Header/Header'
import MainData from '../containers/MainData/MainData'


export default function HomePage() {
  return (
    <View style={styles.container}>
        <Header/>
        <MainData/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1.82,
    backgroundColor: '#191a24',
  },
});
