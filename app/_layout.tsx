import { Stack } from 'expo-router';
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ title: 'Login', headerShown: false }} />
      <Stack.Screen name="signup" options={{ title: 'Cadastro', headerShown: false }} />
      <Stack.Screen name="home" options={{ title: 'Home', headerShown: false }} />
      <Stack.Screen name='alert' options={{ title: 'Alerta', headerShown: false }} />
      <Stack.Screen name='info' options={{ title: 'Info', headerShown: false }} />
      <Stack.Screen name='notifications' options={{ title: 'Notificações', headerShown: false }} />
    </Stack>
  );
}