import React from 'react';
import Svg, { Circle, RadialGradient, Stop, Defs, Image} from 'react-native-svg';
import {StyleSheet, Text, View} from 'react-native';
class CircularProgressBar extends React.Component {
  
    render() {
      // Size of the enclosing square
      const sqSize = this.props.sqSize;
      // SVG centers the stroke width on the radius, subtract out so circle fits in square
      const radius = (this.props.sqSize - this.props.strokeWidth) / 2;
      // Enclose cicle in a circumscribing square
      const viewBox = `0 0 ${sqSize} ${sqSize}`;
      // Arc length at 100% coverage is the circle circumference
      const dashArray = radius * Math.PI * 2;

      const dashOffset = dashArray - dashArray * this.props.temperature / 42;
  
      return (
        <View style={styles.container}>
          <View style={styles.circleBar}>
            <Svg
              width={this.props.sqSize}
              height={this.props.sqSize}
              viewBox={viewBox}>
              <Circle
                cx={this.props.sqSize/2}
                cy={this.props.sqSize/2}
                r={radius}
                strokeWidth={`${this.props.strokeWidth-2}px`} 
                fill="url(#grad)"
                stroke = 'grey'/>
              <Circle
                cx={this.props.sqSize / 2}
                cy={this.props.sqSize / 2}
                r={radius}
                strokeWidth={`${this.props.strokeWidth}px`}
                // Start progress marker at 9 O'Clock
                transform={`rotate(-180 ${this.props.sqSize / 2} ${this.props.sqSize / 2})`}
                
                style={{
                  fill: 'none',
                  strokeDasharray: dashArray,
                  strokeDashoffset: dashOffset,
                  stroke:'#1098d8',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }} />
              <Defs>
                  <RadialGradient
                      id="grad"
                      cx={this.props.sqSize / 2}
                      cy={this.props.sqSize / 2}
                      r={radius-5}

                  >
                      <Stop offset="0" stopColor="#126792" stopOpacity="1" />
                      <Stop offset="1" stopColor="#1a1c26" stopOpacity="1" />
                  </RadialGradient>
              </Defs>
              <Image
                x='15%'
                y={sqSize/2-sqSize/12}
                height = {sqSize/6}
                width = {sqSize/6}
                preserveAspectRatio="xMidYMid slice"
                opacity="1"
                href={require('../../img/MainDataTemperature/snow.png')}
                clipPath="url(#grad)"
              />
            </Svg>
          </View>
          <Text style={styles.temperature}>
              {`${this.props.temperature}°`}
          </Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },   
    circleBar: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    temperature: {
      flex: 1,
      position: 'absolute',
      fontFamily: 'montserrat-regular',
      color: 'white',
      paddingLeft: 5,
      fontSize: 30,
    },

  });
  


  export default CircularProgressBar