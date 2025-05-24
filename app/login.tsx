import { Link, router } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

// Função simulada para verificar credenciais
const simulateSignIn = (email: string, password: string) => {
  return new Promise((resolve, reject) => {
    // Simula uma verificação assíncrona (ex.: AsyncStorage, API, ou contexto)
    setTimeout(() => {
      // Credenciais fictícias para teste (em um app real, use uma API ou armazenamento seguro)
      const validEmail = 'test@example.com';
      const validPassword = 'password123';
      
      if (email === validEmail && password === validPassword) {
        resolve({ id: 'mockUser' }); // Simula login bem-sucedido
      } else {
        reject(new Error('E-mail ou senha inválidos.')); // Simula erro de login
      }
    }, 1000); // Simula latência de rede
  });
};

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      await simulateSignIn(email, password);
      router.replace('/home'); // Redireciona para a tela home após login
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Erro ao fazer login.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Bem vindo ao Eletriguard!</Text>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Entrar" onPress={handleLogin} />
      <Link href="/signup" style={styles.link}>
        Não tem uma conta? Cadastre-se
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#4d7599',
  },
  h1: {
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  },
  inputContainer: {
    alignItems: 'center',
  },
  input: {
    color: 'gray',
    backgroundColor: '#fff',
    borderWidth: 1,
    padding: 10,
    width: '60%',
    marginBottom: 10,
    borderRadius: 5,
  },
  error: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  link: {
    marginTop: 20,
    color: 'white',
    textAlign: 'center',
  },
});