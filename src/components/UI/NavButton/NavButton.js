import React from 'react';
import { StyleSheet, View, Dimensions} from 'react-native';
import  {Svg, Circle, RadialGradient, Stop, Defs} from 'react-native-svg';
import {Link } from "react-router-native";
import SvgUri from 'react-native-svg-uri';



export default function NavButton(props) {
 
  const height = Dimensions.get('window').height/20
  const viewBox = `0 0 ${height} ${height}`;


  
  return (
    <View style={styles.container}>
    {props.selected ?     
    <View style={styles.circleBar}>
      <Svg
        width={height}
        height={height}
        viewBox={viewBox}>
        <Circle
          cx={height/2}
          cy={height/2}
          r={height/2}
          fill="url(#grad)"
          />
        <Defs>
            <RadialGradient
                id="grad"
                cx={height/2}
                cy={height/2}
                r={(height-2)/2}

            >
                <Stop offset="0" stopColor="#0c6b96" stopOpacity="0.5" />
                <Stop offset="1" stopColor="#040814" stopOpacity="1" />
            </RadialGradient>
        </Defs>

      </Svg>
    </View> : null}
    <View style={styles.source}>
        <Link
            to={props.link}
            onPress={props.onPress}
            style={styles.link}
        >
        <SvgUri 
            fill = {props.selected ? '#1098d8' : '#80828E'}
            height = '18'
            source={props.source}
        />
        </Link>

    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  source: {
      flex: 1,
      padding: 10,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
    },
  link: {
        padding: 10,
    },
});


