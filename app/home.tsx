import { View, Text, Button, StyleSheet } from 'react-native';
import { auth } from '../src/firebaseConfig';
import { signOut } from 'firebase/auth';
import { router } from 'expo-router';

export default function HomeScreen() {
  const handleLogout = async () => {
    await signOut(auth);
    router.replace('/_sitemap');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo!</Text>
      <Button title="Sair" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1, 
     justifyContent: 'center', 
     alignItems: 'center' },
  title: { 
    fontSize: 24, 
    marginBottom: 20 },
});