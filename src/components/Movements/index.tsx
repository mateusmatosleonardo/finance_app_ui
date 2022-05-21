import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';

const Movements = ({data}: any) => {
  const [showValue, setShowValue] = React.useState(true);
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.9}
      onPress={() => setShowValue(!showValue)}>
      <Text style={styles.date}>{data.date}</Text>

      <View style={styles.content}>
        <Text style={styles.label}>{data.label}</Text>

        {showValue ? (
          <Text style={data.type === 1 ? styles.value : styles.expenses}>
            R$ {data.value}
          </Text>
        ) : (
          <View style={styles.skeleton} />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: '#dadada',
  },
  date: {
    color: '#dadada',
    fontWeight: 'bold',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#313030',
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2ecc71',
  },
  expenses: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e74c3c',
  },
  skeleton: {
    width: 80,
    height: 14,
    marginTop: 6,
    borderRadius: 4,
    backgroundColor: '#dadada',
  },
});

export default Movements;
