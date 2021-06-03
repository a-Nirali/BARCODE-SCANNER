import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScanScreen from './screens/scanScreen'; 
export default class App extends React.Component{
  render(){
    return(
      <View style={styles.container}>
      <ScanScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '',
    flex:1
  }
})
