import { Feather, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Ícone de sensor (substitua pelo caminho real)

export default function NotificationsScreen() {
  type MaterialIconName = 'error' | 'circle' | 'check-circle' | 'info';

  const notifications: { icon: MaterialIconName; color: string; text: string }[] = [
    { icon: 'error', color: '#ff4500', text: 'Alerta de violação detectado "Sensor ativado às 13:42"' },
    { icon: 'circle', color: '#ff69b4', text: 'Urgente | Rua Siqueira Mendes, nº 128 - Cidade Velha' },
    { icon: 'circle', color: '#ff69b4', text: 'Tentativa de remoção de cabo "Atividade suspeita registrada"' },
    { icon: 'circle', color: '#ffd700', text: 'Moderado | Travessa Dom Bosco, nº 90 - Cidade Velha' },
    { icon: 'check-circle', color: '#32cd32', text: 'Sistema restaurado "Ocorrência anterior foi resolvida com sucesso"' },
    { icon: 'info', color: '#32cd32', text: 'Informativo | Rua Dr. Malcher, nº 215 - Cidade Velha' },
  ];

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.title}>NOTIFICAÇÕES</Text>
          <Feather name="alert-triangle" size={70} color="red" />
      </View>

      {/* Descrição */}
      <Text style={styles.description}>
        Alertas de segurança e ocorrências recentes
      </Text>

      {/* Lista de notificações */}
      <View style={styles.notificationContainer}>
        {notifications.map((notif, index) => (
          <View key={index} style={styles.notificationItem}>
            <MaterialIcons name={notif.icon} size={30} color={notif.color} style={styles.notificationIcon} />
            <Text style={styles.notificationText}>{notif.text}</Text>
          </View>
        ))}
      </View>

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
    marginLeft: 30,
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  headerIcon: {
    width: 30,
    height: 30,
    tintColor: 'white',
  },
  description: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 20,
  },
  notificationContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  notificationItem: {
    flexDirection: 'row',
    fontSize: 1000,
    alignItems: 'center',
    marginBottom: 10,
  },
  notificationIcon: {
    marginRight: 10,
  },
  notificationText: {
    color: 'black',
    fontSize: 22,
    width: '90%',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#3e6180',
  },
});