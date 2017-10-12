import React,{Component} from 'react';
import {
	AppRegistry,
   	StyleSheet,
   	Text,
   	View,
   	Image,
    PixelRatio
} from 'react-native';

class Main extends Component
{
  render() {
     return (
       <View style={styles.container}>
         <View style={styles.unit}>
            <Text style={[styles.font]}>编程社区</Text>
          </View>
         <View style={[styles.unit,styles.lineLeftRight]}>
           <View style={[{flex:1,height:50},styles.lineCenter,styles.center]}>
             <Text style={[styles.font]}>swift</Text>
           </View>
           <View style={{flex:1,height:50}}>
             <Text style={[styles.font]}>React</Text>
           </View>
         </View>
         <View style={styles.unit}>
           <View style={styles.unit}>
             <Text style={[styles.font]}>html5</Text>
           </View>
           <View style={styles.unit}>
             <Text style={[styles.font]}>cordova</Text>
           </View>
         </View>
       </View>
     );
   }
}


const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    height:100,
    marginTop:40,
    marginLeft:5,
    marginRight:5,
    backgroundColor: '#2D9900',
    borderRadius: 5,
    overflow:'hidden',
  },
  leftView:{
    flex:1,
    fontSize:30,
  },
  font:{
    color:'#FFFFFF',
    fontSize:16,
    fontWeight:'bold'
  },
  center:{
    justifyContent:'center',
    alignItems:'center'
  },
  unit:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  lineCenter:{
     borderBottomWidth:1/PixelRatio.get(),
     borderColor:'#FFFFFF'
   },
  lineLeftRight:{
     borderLeftWidth:1/PixelRatio.get(),
     borderRightWidth:1/PixelRatio.get(),
     borderColor:'#FFFFFF'
   },
   item:{
     flex:1,

   }
});

AppRegistry.registerComponent('SimpleApp', () => Main);
