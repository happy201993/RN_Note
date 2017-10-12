/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component,PropTypes } from 'react';
import {
  AppRegistry,
  Text,
  View,
  NavigatorIOS,
  StyleSheet,
  TextInput,
} from 'react-native';

export default class SimpleApp extends Component {
 render() {
    return (
      <NavigatorIOS
        style={styles.flex}
        initialRoute={{
          component: List,
          title: 'My Initial Scene',
          passProps: { }
        }}/>
    );
  }
}

class List extends Component {
   render() {
     return (
       <View style={styles.base_view}>
         <View style={styles.input_backView}>
            <Text style={styles.input_label}>username</Text>
            <TextInput>
            </TextInput>
         </View>
        </View>
     );
   }
 }

const styles = StyleSheet.create({
   flex:{
     flex: 1,
   },
   list_item:{
     height:40,
     marginLeft:10,
     marginRight:10,
     borderBottomWidth:1,
     borderBottomColor: '#ddd',
     justifyContent: 'center'
   },
   list_item_font:{
     fontSize:16
   },
   base_view:{
    marginTop:64,
    flex: 1,
   },
   input_backView:{
    flexDirection: 'row',justifyContent: 'center',alignItems:'center',backgroundColor:'#f0f',height:50
   },
   input_label:{
    fontSize:16
   }
 });

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
