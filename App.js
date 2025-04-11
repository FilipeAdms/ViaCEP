import { Text, SafeAreaView, StyleSheet, ScrollView, View  } from 'react-native';
import { TextInput, List, Button } from 'react-native-paper';
import { useState } from 'react';

export default function App() {
  // Inicializando o estado
  let [cep, setCep] = useState('');
  let [nome, setNome] = useState('');
  let [email, setEmail] = useState('');
  let [cpf, setCpf] = useState('');
  let [logradouro, setLogradouro] = useState('');
  let [bairro, setBairro] = useState('');
  let [localidade, setLocalidade] = useState('');
  let [complemento, setComplemento] = useState('');
  let [numero, setNumero] = useState('');
  let [listTitle, setListTitle] = useState('Selecione o Estado');
  let [listExpanded, setlistExpanded] = useState(false);

  let BuscaCep = (xcep) => {
    let url = `https://viacep.com.br/ws/${xcep}/json/`;
    console.log(url);
    fetch(url)
      .then((resp) => { return resp.json() })
      .then((dados) => {
        setLogradouro(dados.logradouro || '');
        setBairro(dados.bairro || '');
        setLocalidade(dados.localidade || '');
        setListTitle(dados.uf || '');
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  return (
    <SafeAreaView style={styles.principalContainer}>
      <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro Simples</Text>
        <View>
          <TextInput style={{ flex: 2 }}
            label={'Nome'}
            mode='outlined'
            placeholder='Insira seu nome completo'
            value={nome}
            onChangeText={setNome}
          />
          <TextInput style={{ flex: 2 }}
            label={'E-mail'}
            placeholder='exemplo@exemplo.com.br'
            mode='outlined'
            value={email}
            onChangeText={setEmail}
          />
          <TextInput style={{ flex: 2 }}
            label={'CPF'}
            placeholder='123.456.789-00'
            mode='outlined'
            value={cpf}
            onChangeText={setCpf}
          />
          <View style={styles.endNum}>

            <TextInput style={{ flex: 2 }}
              onChangeText={(value) => { setCep(value); }}
              label="Digite o Cep"
              placeholder='Digite o CEP'
              mode='outlined'
              onBlur={() => { if (cep) BuscaCep(cep); }}
            />
            <Button style={{ marginTop: 10, }}
              title="Buscar"
              mode='contained'
              compact={true}
              labelStyle={{ textAlign: 'center' }}
              onPress={() => { if (cep) BuscaCep(cep); }}
            >
              Procurar
            </Button>
          </View>
          <View style={styles.endNum}>
            <TextInput style={{ flex: 2 }}
              label={'Endereço'}
              mode='outlined'
              value={logradouro}
              onChangeText={setLogradouro}
            />
            <TextInput style={{ flex: 1 }}
              label={'Número'}
              mode='outlined'
              keyboardType='numeric'
              value={numero}
              onChangeText={setNumero}
            />
          </View>
          <TextInput
            label={'Complemento'}
            mode='outlined'
            value={complemento}
            onChangeText={setComplemento}
          />
          <TextInput
            label={'Bairro'}
            mode='outlined'
            value={bairro}
            onChangeText={setBairro}
          />
          <TextInput
            label={'Cidade'}
            mode='outlined'
            value={localidade}
            onChangeText={setLocalidade}
          />
        </View>
        <View>
          <List.Section>
            <List.Accordion
              title={listTitle}
              expanded={listExpanded}
              onPress={() => { setlistExpanded(!listExpanded) }}>
              <ScrollView style={styles.itemList}>
                <View style={{ backgroundColor: '#e0e0e0' }}>
                  <List.Item title="AC" onPress={() => { setlistExpanded(false); setListTitle('AC'); }} />
                  <List.Item title="AL" onPress={() => { setlistExpanded(false); setListTitle('AL'); }} />
                  <List.Item title="AP" onPress={() => { setlistExpanded(false); setListTitle('AP'); }} />
                  <List.Item title="AM" onPress={() => { setlistExpanded(false); setListTitle('AM'); }} />
                  <List.Item title="BA" onPress={() => { setlistExpanded(false); setListTitle('BA'); }} />
                  <List.Item title="CE" onPress={() => { setlistExpanded(false); setListTitle('CE'); }} />
                  <List.Item title="DF" onPress={() => { setlistExpanded(false); setListTitle('DF'); }} />
                  <List.Item title="ES" onPress={() => { setlistExpanded(false); setListTitle('ES'); }} />
                  <List.Item title="GO" onPress={() => { setlistExpanded(false); setListTitle('GO'); }} />
                  <List.Item title="MA" onPress={() => { setlistExpanded(false); setListTitle('MA'); }} />
                  <List.Item title="MT" onPress={() => { setlistExpanded(false); setListTitle('MT'); }} />
                  <List.Item title="MS" onPress={() => { setlistExpanded(false); setListTitle('MS'); }} />
                  <List.Item title="MG" onPress={() => { setlistExpanded(false); setListTitle('MG'); }} />
                  <List.Item title="PA" onPress={() => { setlistExpanded(false); setListTitle('PA'); }} />
                  <List.Item title="PB" onPress={() => { setlistExpanded(false); setListTitle('PB'); }} />
                  <List.Item title="PR" onPress={() => { setlistExpanded(false); setListTitle('PR'); }} />
                  <List.Item title="PE" onPress={() => { setlistExpanded(false); setListTitle('PE'); }} />
                  <List.Item title="PI" onPress={() => { setlistExpanded(false); setListTitle('PI'); }} />
                  <List.Item title="RJ" onPress={() => { setlistExpanded(false); setListTitle('RJ'); }} />
                  <List.Item title="RN" onPress={() => { setlistExpanded(false); setListTitle('RN'); }} />
                  <List.Item title="RS" onPress={() => { setlistExpanded(false); setListTitle('RS'); }} />
                  <List.Item title="RO" onPress={() => { setlistExpanded(false); setListTitle('RO'); }} />
                  <List.Item title="RR" onPress={() => { setlistExpanded(false); setListTitle('RR'); }} />
                  <List.Item title="SC" onPress={() => { setlistExpanded(false); setListTitle('SC'); }} />
                  <List.Item title="SP" onPress={() => { setlistExpanded(false); setListTitle('SP'); }} />
                  <List.Item title="SE" onPress={() => { setlistExpanded(false); setListTitle('SE'); }} />
                  <List.Item title="TO" onPress={() => { setlistExpanded(false); setListTitle('TO'); }} />
                </View>
              </ScrollView>
            </List.Accordion>
          </List.Section>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  principalContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: 600
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  endNum: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginTop: 10,
  },
  itemList: {
    maxHeight: 200,
  }
});

