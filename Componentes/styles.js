import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    fontWeight: '700'
  },
  nome:{
    fontSize: 30,
    fontWeight: 'bold',
    color: 'grey'

  },
  descricao:{
    backgroundColor: '#d6dee2',
    width: 350,
    height: 240,
    marginTop: 30
  },
  textoDescricao:{
    margin:20
  },
  texto:{
    fontSize: 15
  }
});

export default estilo;