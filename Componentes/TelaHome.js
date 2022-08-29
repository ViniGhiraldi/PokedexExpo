import React from 'react';
import { Text, View, Image } from 'react-native';
import estilo from './styles';
import { StyleSheet } from "react-native";

export default function TelaHome () {
  return (
    <View style={estilo.container}>
      <Image source={{
        uri: 'https://pokedex.sleduardo.dev/img/logo.svg'
      }} style={estiloLocal.imagemPokedex}/>
      <Image source={{
        uri:'https://wallpaperaccess.com/full/5818306.jpg'
      }} style={estiloLocal.imagem} />
    </View>
  );
}



const estiloLocal = StyleSheet.create({
  imagemPokedex: {
    width:250,
    height:100,
    marginBottom:20
  },
  imagem:{
    width:400,
    height:700
  }
});