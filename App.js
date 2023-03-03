import * as React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  Button,
  Linking,
} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  let img =
    'https://media.licdn.com/dms/image/C4D03AQEFthBTj0wvCQ/profile-displayphoto-shrink_200_200/0/1662213817842?e=1682553600&v=beta&t=DHilnpJ1tEx_sQfH3SVDMLRKp133DeYavffM0hNOk-U';

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image
          source={{
            uri: img,
          }}
          style={{
            with: 200,
            height: 200,
            margin: 90,
            marginBottom: 30,
            borderRadius: 100,
          }}
        />

        <Text style={styles.Text}>Daniel Mingoranse da Silva</Text>
        <Text style={styles.Text}>Formação</Text>

        <Text style={styles.subtext}>
          Cursando Ensino superior Fatec Rubens Lara, SP
        </Text>
        <Text style={styles.Text}>Experiencia</Text>

        <Text style={styles.subtext}>
          Tecnico em Informatica - Poupatempo Praia Grande, SP
        </Text>

        <Text style={styles.Text}>Sobre mim</Text>

        <Text style={styles.textolongo}>
          Falando um pouco sobre mim Desenvolvedor web apaixonado pela área
          tecnológica, curioso e atencioso em aprender de tudo um pouco com a
          intenção de transformar ideias, em novas realidade, para melhor e
          assim profissionalizar minha carreira como um desenvolvedor de ponta.
        </Text>

        <Text style={{ margin: 2 }}></Text>

        <Button
          title="Github"
          style={{ fontSize: 200 }}
          onPress={() => {
            Linking.openURL('https://github.com/Daniel-Mingoranse');
          }}></Button>

        <Text style={{ margin: 2 }}></Text>

        <Button
          title="Linkedin"
          style={{ fontSize: 20 }}
          onPress={() => {
            Linking.openURL(
              'https://www.linkedin.com/in/daniel-mingoranse-94530b16a'
            );
          }}></Button>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
  Text: {
    fontSize: 24,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
  },
  subtext: {
    fontSize: 20,
    textAlignVertical: 'center',
    textAlign: 'center',
    margin: 10,
  },
  textolongo: {
    fontSize: 20,

    margin: 5,
  },
  Button: {
    marginBottom: 1,
  },
});
