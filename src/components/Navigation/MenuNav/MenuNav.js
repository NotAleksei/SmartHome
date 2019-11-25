import React from 'react';
import { StyleSheet, View} from 'react-native';
import NavButton from '../../../components/UI/NavButton/NavButton'
 


class MenuNav extends React.Component {

  state ={
    home: false,
    alerts: false,
    store: false,
    user: false,
  }

  updateChoice(type) {
    let newState = {...this.state};
    for (let key in newState) {
      newState[key] = false;
    }
    newState[type] = !newState[type];
    this.setState(newState);
  }

render(){
  return (
    <View style={styles.container}>
        <NavButton 
          link = '/'
          selected={this.state.home} 
          source={require('../../../img/MainNav/home.svg')}
          onPress={() => { this.updateChoice('home') }}
        />
        <NavButton 
          link = '/alerts'
          selected={this.state.alerts}
          source={require('../../../img/MainNav/alerts.svg')}
          onPress={() => { this.updateChoice('alerts') }}
        />
        <NavButton 
          link = '/store'
          selected={this.state.store} 
          source={require('../../../img/MainNav/store.svg')}
          onPress={() => { this.updateChoice('store') }}
        />
        <NavButton 
          link = '/user'
          selected={this.state.user} 
          source={require('../../../img/MainNav/user.svg')}
          onPress={() => { this.updateChoice('user') }}
        />
    </View>
    
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 0.18,
    flexDirection:'row',
    alignItems: 'center',
    backgroundColor: '#040814',
  },
  source: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MenuNav