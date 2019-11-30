import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';

import MenuNav  from '../components/Navigation/MenuNav/MenuNav'


class Layout extends React.Component{

 state = {
  fontLoaded: false
 }


  async componentDidMount() {
    await Font.loadAsync({
      'montserrat-regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render(){
  return (
    <View style={styles.container}>
      {this.state.fontLoaded ? this.props.children : null}
        <MenuNav/>
    </View>
  );
}
}

export default Layout

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
