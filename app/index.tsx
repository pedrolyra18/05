import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

// Função simulada para verificar o estado de autenticação
const checkAuthState = () => {
  return new Promise((resolve) => {
    // Simula uma verificação assíncrona (ex.: AsyncStorage, API, ou contexto)
    setTimeout(() => {
      const isAuthenticated = false; // Altere para true para simular usuário logado
      resolve(isAuthenticated ? { id: 'mockUser' } : null);
    }, 1000); // Simula latência de rede
  });
};

export default function IndexScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const user = await checkAuthState();
        if (user) {
          router.replace('/home'); // Usuário logado, vai para home
        } else {
          router.replace('/login'); // Não logado, vai para login
        }
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {loading && <ActivityIndicator size="large" />}
      <Text>Carregando...</Text>
    </View>
  );
}