import React from 'react';
import { Text, View, Image } from 'react-native';
import estilo from './styles';
import { StyleSheet } from "react-native";
export default function CharizardX () {
  return (
    <View style={estilo.container}>
      <View style={estiloLocal.container}>
        <Text style={estilo.nome}>Mega Charizard X Nº006</Text>
        <Image source={{
            uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006_f2.png',
          }} style={estiloLocal.imagem} />
        <View style={estilo.descricao}>
          <View style={estilo.textoDescricao}>
            <Text style={estilo.texto}>Altura: 1.7 m                  Tipos: Fogo e Dragão</Text>
          </View>
          <View style={estilo.textoDescricao}>
            <Text style={estilo.texto}>Peso: 110.5 kg                            Gêneros: ♂ ♀</Text>
          </View>
          <View style={estilo.textoDescricao}>
            <Text style={estilo.texto}>Fraquezas: Dragão e Terra           Geração: 1ª</Text>
          </View>
          
        </View>
      </View>
    </View>
  );
}



const estiloLocal = StyleSheet.create({
  container: {
    backgroundColor: '#add8e6',
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
    width: 300,
    height: 320
  }
});