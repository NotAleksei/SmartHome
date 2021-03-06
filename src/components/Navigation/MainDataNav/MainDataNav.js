import React from 'react';
import { StyleSheet, Image, View,} from 'react-native';
import Svg, {Line} from 'react-native-svg';
import SvgUri from 'react-native-svg-uri';



export default function MainDataNav() {
  return (
    <View style={styles.container}>
      <View style={styles.swipeLine}>
        <Svg height="6" width="40">
          <Line 
            x1="5" y1="3" x2="35" y2="3" strokeLinecap="round" stroke='#454858' strokeWidth="3"  />
        </Svg>
      </View>
      <View style={styles.btnContainer}>
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
              <View style={styles.line}>
                <Svg height="5" width="100">
                  <Line 
                    x1="4" y1="2.5" x2="90" y2="2.5" strokeLinecap="round" stroke='#1098D8' strokeWidth="2.5"  />
                </Svg>
              </View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.38,
    borderBottomColor: '#363946',
    borderBottomWidth: 1,
  },
  btnContainer: {
    flex: 1,
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
    marginBottom: -3,
  },
  swipeLine: {
    position: 'absolute',
    top: 5,
    alignSelf: 'center'
  },
  line: {
    position: 'absolute',
    bottom: 0
  }

});
