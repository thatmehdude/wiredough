import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { currencies, Currency } from '../data/currencies';
import { Ionicons } from '@expo/vector-icons';

export const BalanceCard: React.FC = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(currencies[0]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelectCurrency = (currency: Currency) => {
    setSelectedCurrency(currency);
    setModalVisible(false);
  };

  return (
    <View>
      <LinearGradient
        colors={['#0DAD66', '#0DAF66']}
        style={styles.cardContainer}
      >
        <View style={styles.toggleContainer}>
          <TouchableOpacity style={[styles.toggleButton, styles.activeToggle]}>
            <Text style={styles.toggleTextActive}>Fiat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toggleButton}>
            <Text style={styles.toggleText}>Crypto</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.currencyContainer}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.flag}>{selectedCurrency.flag}</Text>
          <Text style={styles.currencyText}>{selectedCurrency.name}</Text>
          <Ionicons name="chevron-down" size={16} color="white" />
        </TouchableOpacity>

        <Text style={styles.balanceAmount}>${'20,000'}</Text>
        <Text style={styles.balanceLabel}>Available Balance</Text>

        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add Money</Text>
        </TouchableOpacity>
      </LinearGradient>

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Select Currency</Text>
            <FlatList
              data={currencies}
              keyExtractor={(item) => item.code}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.currencyItem}
                  onPress={() => handleSelectCurrency(item)}
                >
                  <Text style={styles.currencyFlag}>{item.flag}</Text>
                  <Text style={styles.currencyName}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#00FF8B',
    borderRadius: 30,
    marginBottom: 15,
  },
  toggleButton: {
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  toggleText: {
    color: '#13342B',
    fontSize: 14,
    fontWeight: '600',
  },
  activeToggle: {
    backgroundColor: '#13342B',
  },
  toggleTextActive: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  currencyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    gap: 6,
  },
  flag: {
    fontSize: 20,
  },
  currencyText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  balanceAmount: {
    color: 'white',
    fontSize: 32,
    fontWeight: '700',
  },
  balanceLabel: {
    color: '#D9F7E7',
    fontSize: 14,
    marginBottom: 10,
  },
  addButton: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 25,
    paddingVertical: 6,
    paddingHorizontal: 25,
    marginTop: 10,
  },
  addButtonText: {
    color: 'white',
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    width: '65%',
    maxHeight: '70%',
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  currencyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  currencyFlag: {
    fontSize: 22,
    marginRight: 10,
  },
  currencyName: {
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: '#0DAD66',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: '600',
  },
});
