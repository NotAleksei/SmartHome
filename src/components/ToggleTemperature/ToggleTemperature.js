import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Dimensions } from 'react-native';
import CircularProgressBar from '../CircularProgressBar/CircularProgressBar'



class ToggleTemperature extends React.Component {
  
  state = {
    temperature: 21
  }
  
  increaseTemperature = () =>{
    if(this.state.temperature != 42){
      this.setState({
        temperature: this.state.temperature + 1
      })
    }
  }

  decreaseTemperature = () =>{
    if(this.state.temperature != 0){
      this.setState({
        temperature: this.state.temperature - 1
      })
    }
  }

  render(){
    let height = Dimensions.get('window').height/5.5;

  return (
    <View style={styles.container}>
        <View style={styles.buttonWrap}>
          <TouchableOpacity onPress={this.decreaseTemperature}>
            <Text style={styles.button}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tempreture}>
          <CircularProgressBar             
            strokeWidth="3"
            sqSize={height}
            temperature={this.state.temperature}/>
        </View>
        <View style={styles.buttonWrap}>
          <TouchableOpacity onPress={this.increaseTemperature}>
            <Text style={styles.button}>+</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tempreture: {
    flex: 1.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrap: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    fontFamily: 'montserrat-regular',
    padding: 15,
    fontSize: 50,
    color: 'white'
  }
});

export default ToggleTemperature