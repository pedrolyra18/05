import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SupportEmergencyScreen() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.title}>Suporte e emergência</Text>
        <Ionicons name="call" size={60} color="white" />
      </View>

      {/* Descrição */}
      <Text style={styles.description}>Como você gostaria de agir?</Text>

      {/* Botões principais */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <MaterialIcons name="phone" size={30} color="black" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Falar com o suporte técnico</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <MaterialIcons name="local-police" size={30} color="black" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Falar com as autoridades</Text>
        </TouchableOpacity>
      </View>

      {/* Texto de notificação falsa */}
      <Text style={styles.warningText}>
        Notificação falsa?{'\n'}Se você acredita que esta notificação é um engano, clique abaixo para nos informar.
      </Text>

      {/* Botão de reportar */}
      <TouchableOpacity style={styles.reportButton}>
        <Text style={styles.reportButtonText}>Reportar notificação falsa</Text>
      </TouchableOpacity>

      {/* Ícones inferiores */}
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => router.push('/home')}>
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
  description: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 50,
  },
  button: {
    backgroundColor: '#f0e68c',
    borderRadius: 20,
    padding: 20,
    width: '80%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonIcon: {
    marginRight: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
  warningText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  reportButton: {
    backgroundColor: '#ff0000',
    borderRadius: 10,
    padding: 10,
    width: '60%',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  reportButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#3e6180',
  },
});