import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  color: string;
}

export const ActionButton: React.FC<Props> = ({ icon, label, color }) => (
  <TouchableOpacity style={styles.container}>
    <Ionicons name={icon} size={24} color={color} />
    <Text style={[styles.label, { color }]}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  label: {
    marginTop: 4,
    fontWeight: '600',
  },
});
