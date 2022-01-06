import React,{useState} from 'react';
import { Text, StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import Card from './Card'
export default function Searchh() {


  const [city, setCity ] = useState('')
  const [cityname, setCityname] = useState('')
 
  function handleChange(e)
  {
    setCity(e.target.value);
    console.log(city)
  }

  function handlePress()
  {
    setCityname(city)
  }

  return (
    <View styles={styles.input}>
      <View style={styles.textInput}>
        <TextInput style={styles.input} placeholder="City Name" onChange = {handleChange} value = {city} />
      </View>

      <View style={styles.button}>
        <TouchableOpacity style={styles.touch} onPress={handlePress}><Text style={styles.touch1}>Search</Text></TouchableOpacity>
      </View>

      <Card title={cityname} />

    </View>
  );
}

  const styles = StyleSheet.create({
    textInput: {
      padding: 20,
      borderWidth: 3,
      borderColor: 'orange',
      margin: 20,
    },
    input: {
      position: 'relative',
      outline:'none',
      fontSize:20,
      fontWeight:'bold',
      color:'black',
    },
    touch: {
      margin: 20,
      marginTop: 5,
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      height:50,
      borderColor:'#ededed',
      borderWidth:4,
      backgroundColor:'black',
      borderRadius:8,
    },
    touch1:{
      fontSize:25,
      fontWeight:'bold',
      color:'whitesmoke'
    }
  });