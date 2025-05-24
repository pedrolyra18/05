import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Imagem do técnico (substitua pelo caminho real)

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Ionicons name="information-circle-outline" size={70} color="white" />
        <View style={styles.placeholder} />
      </View>

      {/* Título */}
      <Text style={styles.title}>Sobre o Eletriguard:</Text>

      {/* Descrição */}
      <Text style={styles.description}>
        O Eletriguard é um sistema de segurança para redes elétricas urbanas. Ele detecta violações de cabos em tempo real, acionando alarmes locais e enviando notificações com localização via GPS para as autoridades competentes, melhorando o nosso objetivo de proteger a infraestrutura elétrica e promover a segurança pública.
      </Text>
      <Image source={require('@/assets/images/cable.png')} style={styles.cableImage} />

      {/* Imagem do técnico */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4d7599',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingTop: 40,
    backgroundColor: '#3e6180',
  },
  placeholder: {
    width: 24, // Espaço para manter o ícone de informação centralizado
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  description: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  technicianImage: {
    width: '80%',
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  cableImage: {
    width: '80%',
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
});