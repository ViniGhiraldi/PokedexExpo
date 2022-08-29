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
    height: 200,
    marginTop: 70,
    borderWidth: 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  textoDescricao:{
    margin:20
  },
  texto:{
    fontSize: 15
  }
});

export default estilo;