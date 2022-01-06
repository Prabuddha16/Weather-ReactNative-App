import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, TextInput, View, Button, Image } from 'react-native';
import axios from 'axios';

export default function Card(props) {
  const [main, setMain] = useState('');
  const [weather, setWeather] = useState('');
  const [name, setName] = useState('');

  const title = props.title;

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${title}&units=metric&appid=eedd52cc943dd9174f2c65178d154bdd`)
      .then((res)=>{
        console.log(res.data);
        setWeather(res.data.weather[0]);
        setName(res.data.name);
        setMain(res.data.main);
      });
  },[title]);

  const icon = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`

  return (
    
    <View>
    <View style={styles.card}>
    <View>
      <Text style={styles.text1}>{title} </Text>
    </View>

    <View style={styles.temp}>

    <View style={styles.left}>
    <Text style={{fontSize:22,fontWeight:'bold',color:'white'}}>Max-Temp</Text>
      <Text style={{fontSize:20,fontWeight:'bold'}}>{main.temp_max} </Text>
    </View>

    
    <View style={styles.right}>
    <Text style={{fontSize:22,fontWeight:'bold',color:'white'}}>Min-Temp</Text>
      <Text style={{fontSize:20,fontWeight:'bold'}}>{main.temp_min} </Text>
    </View>
    </View>

      <View>
      <Text style={{marginLeft:'auto',marginRight:'auto',fontSize:23,fontWeight:'bold',marginTop:8,color:'red'}}>{weather.main} </Text>
      <Image source={icon} style={styles.icon} />
      </View>

      <View style={styles.temps}> 
      <Text style={{marginLeft:'auto',marginRight:'auto',marginTop:-10,fontSize:25,fontWeight:'bold',color:'white'}}>{main.temp}&#8451;</Text>
      </View>
      <View>
      <Text style={{marginLeft:'auto',color:'white',marginRight:'auto',marginTop:7,fontSize:19,}} >Feels Like: {main.feels_like}</Text>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon:{
    width:80,
    height:80,
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:-10
  },
  text1:{
    fontSize:30,
    fontWeight:'bold',
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:5,
    marginBottom:5,
    color:'white'
  },
  temp:{
    display:'flex',
    flexDirection:'row',
    marginTop:5,
    justifyContent:'space-between',
    paddingLeft:15,
    paddingRight:15,
    
  },
  left:{
    textAlign:'left',
  },
  right:{
    textAlign:'right',
  },
  card: {
    display: 'flex',
    backgroundColor: 'orange',
    justifyContent: 'space-around',
    margin: 20,
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    color: 'white',
    shadowColor: 'black',
    shadowRadius: 20,
  },
});