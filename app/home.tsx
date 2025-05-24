import { Feather, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Imagem de cabos (substitua pelo caminho real)

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.title}>HOME</Text>
        <TouchableOpacity onPress={() => router.push('/info')}>
          <Ionicons name="information-circle-outline" size={70} color="white" />
        </TouchableOpacity>
      </View>

      {/* Imagem de cabos */}
      <Image source={require('@/assets/images/cable.png')} style={styles.cableImage} />

      {/* Seção de botões em grid 2x2 centralizado */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/alert')}>
          <MaterialIcons name="cable" size={30} color="black" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Alertas recentes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <MaterialIcons name="network-check" size={30} color="black" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Status da rede</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Feather name="map" size={30} color="black" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Mapa região</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/alert')}>
          <MaterialCommunityIcons name="police-badge-outline" size={30} color="black" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Avisar autoridades</Text>
        </TouchableOpacity>
      </View>

      {/* Ícones inferiores */}
      <View style={styles.bottomBar}>
        <TouchableOpacity>
          <Feather name="home" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/alert')}>
          <Feather name="bell" size={30} color="white" />

        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/notifications')}> 
          <Feather name="phone-call" size={30} color="white" />
        </TouchableOpacity>
      </View>
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
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  cableImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    backgroundColor: '#4d7599',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 80,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#f0e68c',
    borderRadius: 20,
    padding: 30,
    width: '40%', // Ajustado para caber melhor no centro
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10, // Espaçamento uniforme
  },
  buttonIcon: {
    marginRight: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#3e6180',
  },
});