import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import {theme} from '../../theme/theme';

const Bills = ({data, openModal}: any) => {
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.9}
        onPress={openModal}>
        <View style={styles.content}>
          <Text style={styles.nameOfBills}>{data.nameOfBills}</Text>
          <Text style={styles.value}>R$ {data.value}</Text>
        </View>
        <Text style={styles.dueDate}>vence em {data.dueDate}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 16,
  },
  nameOfBills: {
    fontFamily: theme.fonts.Bold,
    fontSize: 15,
    color: theme.colors.brandSecondary,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dueDate: {
    fontFamily: theme.fonts.Regular,
    fontSize: 13,
    color: theme.colors.brandSecondary,
    marginTop: 2,
    marginBottom: 8,
  },
  value: {
    fontFamily: theme.fonts.SemiBold,
    fontSize: 16,
    color: theme.colors.brandSecondary,
  },

  skeleton: {
    width: 80,
    height: 14,
    marginTop: 6,
    borderRadius: 4,
    backgroundColor: '#dadada',
  },
});

export default Bills;
