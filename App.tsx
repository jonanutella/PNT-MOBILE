import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [name, setName] = useState(''); // Estado para armazenar o nome do usuário
  const [greeting, setGreeting] = useState(''); // Estado para armazenar a saudação
  const [showGreeting, setShowGreeting] = useState(false); // Estado para controlar a exibição da saudação
  const [greetingImage, setGreetingImage] = useState(null); // Estado para armazenar a imagem da saudação

  // Função para determinar a saudação dependendo da hora do dia
  const getGreetingMessage = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return { message: 'Bom dia', image: require('./https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tecmundo.com.br%2Fciencia%2F279582-sol-tipo-movimentacao-sistema-solar-descubra.htm&psig=AOvVaw052zzFxpk_f3d7Wo9l1xa3&ust=1743983356711000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCODe37eKwowDFQAAAAAdAAAAABAE') };
    } else if (hour < 18) {
      return { message: 'Boa tarde', image: require('./https://www.google.com/url?sa=i&url=https%3A%2F%2Fapp.recadinhosdahora.com%2Fmensagem-de-boa-tarde.html&psig=AOvVaw2nQKqD8fQRFD1We7UZJFny&ust=1743983427652000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMjwzNiKwowDFQAAAAAdAAAAABAE') };
    } else {
      return { message: 'Boa noite', image: require('./https://www.google.com/imgres?q=lua%20feia%20png&imgurl=https%3A%2F%2Fimg.lovepik.com%2Fpng%2F20231111%2Fcrescent-clipart-yellow-smiley-moon-smiling-face-with-star-cartoon_562062_wh300.png&imgrefurl=https%3A%2F%2Fpt.lovepik.com%2Fimage-380552224%2Fnuclear-clipart-cartoon-yellow-moon-vector-people-in-nature-gesture.html&docid=kmMz0-IqlC3WtM&tbnid=yxAQmgrY3LAM4M&vet=12ahUKEwjB2IXtisKMAxWND7kGHdO9MpQQM3oFCIMBEAA..i&w=300&h=300&hcb=2&itg=1&ved=2ahUKEwjB2IXtisKMAxWND7kGHdO9MpQQM3oFCIMBEAA') };
    }
  };

  // Função para atualizar a saudação e a imagem
  const updateGreeting = () => {
    if (name.trim()) {
      const { message, image } = getGreetingMessage();
      setGreeting(`${message}, ${name}!`);
      setGreetingImage(image);
      setShowGreeting(true);
    }
  };

  // Função para limpar a saudação e o nome
  const clearFields = () => {
    setName('');
    setGreeting('');
    setGreetingImage(null);
    setShowGreeting(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saudação Personalizada</Text>
      
     
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      {/* Botão para atualizar a saudação */}
      <Button title="Atualizar Saudação" onPress={updateGreeting} />

      {/* Exibindo a saudação se showGreeting for true */}
      {showGreeting && (
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>{greeting}</Text>

          {/* Exibindo a imagem da saudação */}
          {greetingImage && <Image source={greetingImage} style={styles.image} />}
        </View>
      )}

      {/* Botão para limpar o campo de texto e a saudação */}
      <Button title="Limpar" onPress={clearFields} color="#ff6347" />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4b0082',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#8a2be2',
    borderWidth: 2,
    borderRadius: 8,
    width: '80%',
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
    color: '#333',
  },
  greetingContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  greeting: {
    fontSize: 18,
    color: '#4b0082',
    marginVertical: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 150,
    height: 150,
    marginTop: 10,
    borderRadius: 10,
  },
});

