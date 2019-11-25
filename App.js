import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import Layout from './src/hoc/Layout'
import HomePage  from './src/hoc/HomePage/'



export default function App() {
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

