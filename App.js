import React from 'react';

import { NativeRouter, Route, Link } from "react-router-native";
import Layout from './src/hoc/Layout'
import HomePage  from './src/hoc/HomePage/'
import * as Font from 'expo-font';



class App extends React.Component {


  render(){
  return (
    <NativeRouter>
      <Layout>
          <Route exact path="/" component={HomePage} />
          <Route path="/alerts" component={HomePage} />
          <Route path="/store" component={HomePage} />
          <Route path="/user" component={HomePage} />
      </Layout>
  </NativeRouter>
    
  );
}
}

export default App
