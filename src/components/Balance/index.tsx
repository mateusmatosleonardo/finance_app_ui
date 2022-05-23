import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface BalanceProps {
  balance: string;
  expenses: string;
}

const Balance = ({balance, expenses}: BalanceProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
        <View style={styles.content}>
          <Text style={styles.currencySimbol}>R$</Text>
          <Text style={styles.balance}>{balance}</Text>
        </View>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.content}>
          <Text style={styles.currencySimbol}>R$</Text>
          <Text style={styles.expenses}>{expenses}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -26,
    marginStart: 18,
    marginEnd: 18,
    borderRadius: 4,
    paddingBottom: 18,
    paddingTop: 18,
    backgroundColor: '#fafafa',
    elevation: 1,
    zIndex: 99,
  },
  item: {},
  itemTitle: {
    fontSize: 20,
    color: '#ccc',
  },
  currencySimbol: {
    color: '#ccc',
    marginRight: 6,
    fontSize: 16,
  },
  balance: {
    fontSize: 22,
    color: '#2ecc71',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  expenses: {
    fontSize: 22,
    color: '#e74c3c',
  },
});

export default Balance;
