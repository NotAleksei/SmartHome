import React from 'react';
import { StyleSheet, View } from 'react-native';
import Carousel from '../../components/Carousel/Carousel'
import Room from '../../components/Room/Room'
import Scroll from '../../components/Scroll/Scroll'



class Header extends React.Component {

   state = {
   }


  render(){
    return (
    <View style={styles.container}>
      <Room/>
      <Carousel/>
      <Scroll/>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 0.97,
    flexDirection: 'column',
    backgroundColor: '#1a1c26',
  },
});

export default Header