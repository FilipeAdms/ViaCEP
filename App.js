import { Text, SafeAreaView, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';

export default function App() {
  // Inicializando o estado
  let [cep, setCep] = useState('');
  let [render, setRender] = useState({});  // Inicializando como objeto vazio
  let [logradouro, setLogradouro] = useState('');
  let [bairro, setBairro] = useState('');
  let [localidade, setLocalidade] = useState('');
  let [estado, setEstado] = useState('');

  let BuscaCep = (xcep) => {
    let url = `https://viacep.com.br/ws/${xcep}/json/`;
    console.log(url);
    fetch(url)
      .then((resp) => { return resp.json() })
      .then((dados) => {
        console.log(dados);
        
        setRender(dados);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Cep</Text>
      <TextInput
        onChangeText={(value) => { setCep(value); }}
        placeholder="Digite o Cep"
        mode='contained'
        onBlur={() => { if (cep) BuscaCep(cep); }}
      />
      <Button
        title="Buscar"
        mode='outlined'
        onPress={() => { if (cep) BuscaCep(cep); }} 
      />
      <TextInput
        label={'Endereço'}
        mode='outlined'
        value={render.logradouro}
        onChangeText={(value) => { setLogradouro(value); }}
      />
      <TextInput
        label={'Bairro'}
        mode='outlined'
        value={render.bairro}
        onChangeText={(value) => { setBairro(value); }}
      />
      <TextInput
        label={'Localidade'}
        mode='outlined'
        value={render.localidade}
        onChangeText={(value) => { setLocalidade(value); }}
      />
      <TextInput
        label={'Estado'}
        mode='outlined'
        value={render.estado}
        onChangeText={(value) => { setEstado(value); }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    margin: 20,
  },
});
