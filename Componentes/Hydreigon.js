import React from 'react';
import { Text, View, Image } from 'react-native';
import estilo from './styles';
import { StyleSheet } from "react-native";
export default function Hydreigon() {
  return (
    <View style={estilo.container}>
      <View style={estiloLocal.container}>
        <Text style={estilo.nome}>Hydreigon Nº635</Text>
        <Image source={{
            uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/635.png',
          }} style={estiloLocal.imagem} />
        <View style={estilo.descricao}>
          <View style={estilo.textoDescricao}>
            <Text style={estilo.texto}>Altura: 1.8 m             Tipos: Dragão e Sombrio</Text>
          </View>
          <View style={estilo.textoDescricao}>
            <Text style={estilo.texto}>Peso: 160.0 kg                             Gêneros: ♂ ♀</Text>
          </View>
          <View style={estilo.textoDescricao}>
            <Text style={estilo.texto}>Fraquezas: Fada, Lutador e Gelo    Geração: 5ª</Text>
          </View>
          
        </View>
      </View>
    </View>
  );
}



const estiloLocal = StyleSheet.create({
  container: {
    backgroundColor: '#0d214f',
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