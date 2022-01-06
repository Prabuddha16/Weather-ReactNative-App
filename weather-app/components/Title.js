import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Title(){
  return(
    <View>
    <Text style={styles.texts}> Weather 
    </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  texts:{
    backgroundColor:'black',
    color:'white',
    textAlign:'center',
    padding:10,
    fontSize:36,
    fontWeight:'bold',
    borderBottomColor:'black',
    borderBottomWidth:3,
    paddingTop:24,
  }
});
