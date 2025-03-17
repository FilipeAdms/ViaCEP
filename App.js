import { Text, SafeAreaView, StyleSheet, Button, ScrollView } from 'react-native';
import { TextInput, List } from 'react-native-paper';
import { useState } from 'react';
import { View } from 'react-native-web';

export default function App() {
  // Inicializando o estado
  let [cep, setCep] = useState('');
  let [render, setRender] = useState({});  // Inicializando como objeto vazio
  let [logradouro, setLogradouro] = useState('');
  let [bairro, setBairro] = useState('');
  let [localidade, setLocalidade] = useState('');
  let [estado, setEstado] = useState('');
  let [listTitle, setListTitle] = useState ('Selecione o Estado');
  let [listExpanded, setlistExpanded] = useState (false);

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
      <View>
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
      </View>
      <View>
        <List.Section title="Estado" style={{paddingBottom:50}}>
          <List.Accordion
            title={listTitle}
            expanded= {listExpanded}
            onPress={() =>{setlistExpanded(true)}}>
            <ScrollView style={styles.itemList}>
              <View>
                <List.Item title="AC" onPress={() => {setlistExpanded(false), setListTitle('AC')}}/>
                <List.Item title="AL" onPress={() => {setlistExpanded(false), setListTitle('AL')}}/>
                <List.Item title="AP" onPress={() => {setlistExpanded(false), setListTitle('AP')}}/>
                <List.Item title="AM" onPress={() => {setlistExpanded(false), setListTitle('AM')}}/>
                <List.Item title="BA" onPress={() => {setlistExpanded(false), setListTitle('BA')}}/>
                <List.Item title="CE" onPress={() => {setlistExpanded(false), setListTitle('CE')}}/>
                <List.Item title="DF" onPress={() => {setlistExpanded(false), setListTitle('DF')}}/>
                <List.Item title="ES" onPress={() => {setlistExpanded(false), setListTitle('ES')}}/>
                <List.Item title="GO" onPress={() => {setlistExpanded(false), setListTitle('GO')}}/>
                <List.Item title="MA" onPress={() => {setlistExpanded(false), setListTitle('MA')}}/>
                <List.Item title="MT" onPress={() => {setlistExpanded(false), setListTitle('MT')}}/>
                <List.Item title="MS" onPress={() => {setlistExpanded(false), setListTitle('MS')}}/>
                <List.Item title="MG" onPress={() => {setlistExpanded(false), setListTitle('MG')}}/>
                <List.Item title="PA" onPress={() => {setlistExpanded(false), setListTitle('PA')}}/>
                <List.Item title="PB" onPress={() => {setlistExpanded(false), setListTitle('PB')}}/>
                <List.Item title="PR" onPress={() => {setlistExpanded(false), setListTitle('PR')}}/>
                <List.Item title="PE" onPress={() => {setlistExpanded(false), setListTitle('PE')}}/>
                <List.Item title="PI" onPress={() => {setlistExpanded(false), setListTitle('PI')}}/>
                <List.Item title="RJ" onPress={() => {setlistExpanded(false), setListTitle('RJ')}}/>
                <List.Item title="RN" onPress={() => {setlistExpanded(false), setListTitle('RN')}}/>
                <List.Item title="RS" onPress={() => {setlistExpanded(false), setListTitle('RS')}}/>
                <List.Item title="RO" onPress={() => {setlistExpanded(false), setListTitle('RO')}}/>
                <List.Item title="RR" onPress={() => {setlistExpanded(false), setListTitle('RR')}}/>
                <List.Item title="SC" onPress={() => {setlistExpanded(false), setListTitle('SC')}}/>
                <List.Item title="SP" onPress={() => {setlistExpanded(false), setListTitle('SP')}}/>
                <List.Item title="SE" onPress={() => {setlistExpanded(false), setListTitle('SE')}}/>
                <List.Item title="TO" onPress={() => {setlistExpanded(false), setListTitle('TO')}}/>
              </View>
            </ScrollView>
          </List.Accordion>
        </List.Section>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    margin: 20,
    borderColor: 'red',
    borderWidth:1
  },
  itemList: {
    maxHeight: 200,
    borderColor: 'blue',
    borderWidth:1
  }
});
