import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image, ImageSourcePropType } from 'react-native';

type Props = {
  label: string;
  color: string;
  iconSource: ImageSourcePropType;
}

export const ActionButton: React.FC<Props> = ({ label, color, iconSource }) => (
  <TouchableOpacity style={styles.container}>
    <Image source={iconSource} style={styles.icon} resizeMode="contain" />
    <Text style={[styles.label, { color }]}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    width: 40,
    height: 40,
  },
  label: {
    marginTop: 4,
    fontWeight: '500',
    fontSize: 12,
  },
});