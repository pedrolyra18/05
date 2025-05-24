import { router } from 'expo-router';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { auth } from '../src/firebaseConfig';

export default function IndexScreen() {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.replace("/home"); // Usuário logado, vai para home
      } else {
        router.replace('/login'); // Não logado, vai para login (alterado para rota permitida)
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
      <Text>Carregando...</Text>
    </View>
  );
}