import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type Props = {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  label: string;
  color: string;
}

export const ServiceCard: React.FC<Props> = ({ icon, label, color }) => (
  <TouchableOpacity style={styles.card}>
    <MaterialCommunityIcons name={icon} size={28} color={color} />
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    flex: 1,
    flexBasis: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 6,
    padding: 16,
    borderRadius: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  label: {
    marginTop: 8,
    color: '#333',
    textAlign: 'center',
    fontSize: 13,
  },
});
