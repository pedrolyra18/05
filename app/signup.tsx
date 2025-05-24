import { Link, router } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

// Função simulada para criar uma conta
const simulateSignUp = (email: string, password: string ) => {
  return new Promise((resolve, reject) => {
    // Simula uma verificação assíncrona (ex.: AsyncStorage, API, ou contexto)
    setTimeout(() => {
      // Validação simples (exemplo: e-mail não vazio e senha com pelo menos 6 caracteres)
      if (!email || !email.includes('@')) {
        reject(new Error('E-mail inválido.'));
      } else if (password.length < 6) {
        reject(new Error('A senha deve ter pelo menos 6 caracteres.'));
      } else {
        // Simula sucesso no cadastro
        resolve({ id: 'mockUser', email });
      }
    }, 1000); // Simula latência de rede
  });
};

export default function SignUpScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async () => {
    try {
      await simulateSignUp(email, password);
      router.replace('/home'); // Redireciona para a tela home após cadastro
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Ocorreu um erro desconhecido.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>
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
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Cadastrar" onPress={handleSignUp} />
      <Link href="/" style={styles.link}>
        Já tem uma conta? Faça login
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
  title: {
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    color: 'gray',
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 10,
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