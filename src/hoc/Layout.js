import React from 'react';
import { StyleSheet, View } from 'react-native';

import MenuNav  from '../components/Navigation/MenuNav/MenuNav'


export default function Layout(props) {
  return (
    <View style={styles.container}>
        {props.children}
        <MenuNav/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
