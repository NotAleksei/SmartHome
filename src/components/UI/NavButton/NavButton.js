import React from 'react';
import { StyleSheet, View} from 'react-native';
import {Link } from "react-router-native";
import SvgUri from 'react-native-svg-uri';



export default function NavButton(props) {


  return (
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
    
  );
}

const styles = StyleSheet.create({
    source: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      link: {
          padding: 10,
      },
});
