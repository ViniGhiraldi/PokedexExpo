import React from 'react';
import { Text, View, Image } from 'react-native';
import estilo from './styles';
import { StyleSheet } from "react-native";
export default function Dragonite () {
  return (
    <View style={estilo.container}>
      <View style={estiloLocal.container}>
        <Text style={estilo.nome}>Dragonite Nº149</Text>
        <Image source={{
            uri: 'https://www.pngplay.com/wp-content/uploads/10/Dragonite-Pokemon-PNG-HD-Photos.png',
          }} style={estiloLocal.imagem} />
        <View style={estilo.descricao}>
          <View style={estilo.textoDescricao}>
            <Text style={estilo.texto}>Altura: 2.2 m                Tipos: Dragão e Voador</Text>
          </View>
          <View style={estilo.textoDescricao}>
            <Text style={estilo.texto}>Peso: 210.0 kg                             Gêneros: ♂ ♀</Text>
          </View>
          <View style={estilo.textoDescricao}>
            <Text style={estilo.texto}>Fraquezas: Dragão e Pedra             Geração: 1ª</Text>
          </View>
          
        </View>
      </View>
    </View>
  );
}



const estiloLocal = StyleSheet.create({
  container: {
    backgroundColor: '#fffdd0',
    width: 380,
    height: 770,
    alignItems: 'center',
    padding: 10,
    borderWidth: 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  imagem:{
    width: 250,
    height: 320
  }
});