import { Link, router } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { auth } from '../src/firebaseConfig';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace('/home'); // Redireciona para a tela home após login
    } catch (err: any) {
      setError(err.message || 'Erro ao fazer login.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Bem vindo ao Eletriguard!</Text>
      <Text style={styles.title}>Login</Text>
      <center><TextInput
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
      /></center>
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
    backgroundColor: '#4d7599' 
},
  h1: { 
    fontSize: 30, 
    marginBottom: 20, 
    textAlign: 'center', 
    color: 'white'
},
  title: { 
    fontSize: 24, 
    marginBottom: 20, 
    textAlign: 'center', 
    color: 'white'
},
  input: { 
    color: 'gray',
    backgroundColor: '#fff',
    borderWidth: 1, 
    padding: 10, 
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10, 
    borderRadius: 5 
},
  error: { 
    color: 'red', 
    marginBottom: 10
},
  link: { 
    marginTop: 20, 
    color: 'white', 
    textAlign: 'center' 
},
});