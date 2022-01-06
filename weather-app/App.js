import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Title from './components/Title';
import Search from './components/Search';
import Card from './components/Card';

export default function App(){
  return(
    <View>
    <Title />
    <Search />
    </View>
  )
}

const styles = StyleSheet.create({

});
