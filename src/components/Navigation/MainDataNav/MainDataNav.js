import React from 'react';
import { StyleSheet, Image, View,} from 'react-native';
import Svg, {Line} from 'react-native-svg';
import SvgUri from 'react-native-svg-uri';



export default function MainDataNav() {
  return (
    <View style={styles.container}>
          <View style={styles.navWrap}>
            <SvgUri 
                height = '18'
                source={require('../../../img/MainDataNav/light.svg')}
            />
          </View>
          <View style={styles.active}>
            <Image
                style={styles.image}
                source={require('../../../img/MainDataNav/temp.png')}
            ></Image>
          <Svg height="3" width="94">
            <Line 
              x1="0" y1="0" x2="94" y2="0" strokeLinecap="round" stroke='#1098D8' strokeWidth="10"  />
          </Svg>
          </View>
          <View style={styles.navWrap}>
            <SvgUri 
                height = '18'
                source={require('../../../img/MainDataNav/lock.svg')}
            />
          </View>
          <View style={styles.navWrap}>
            <Image
                source={require('../../../img/MainDataNav/window.png')}
            ></Image>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.38,
    flexDirection: 'row',
    borderBottomColor: '#363946',
    borderBottomWidth: 1,

  },
  navWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  active: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -2,
  },

  image:{
    marginTop: 23,
    marginBottom: 20
  }

});
