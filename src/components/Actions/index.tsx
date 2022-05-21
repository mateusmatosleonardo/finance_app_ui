import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Actions = () => {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      overScrollMode="never">
      <TouchableOpacity style={styles.actionButton} activeOpacity={0.8}>
        <View style={styles.areaButton}>
          <AntDesign name="addfolder" size={24} color="#333" />
        </View>
        <Text style={styles.labelButton}>Entradas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton} activeOpacity={0.8}>
        <View style={styles.areaButton}>
          <AntDesign name="creditcard" size={24} color="#333" />
        </View>
        <Text style={styles.labelButton}>Cartões</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton} activeOpacity={0.8}>
        <View style={styles.areaButton}>
          <AntDesign name="tagso" size={24} color="#333" />
        </View>
        <Text style={styles.labelButton}>Compras</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton} activeOpacity={0.8}>
        <View style={styles.areaButton}>
          <AntDesign name="wallet" size={24} color="#333" />
        </View>
        <Text style={styles.labelButton}>Carteira</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton} activeOpacity={0.8}>
        <View style={styles.areaButton}>
          <AntDesign name="barcode" size={24} color="#333" />
        </View>
        <Text style={styles.labelButton}>Boletos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton} activeOpacity={0.8}>
        <View style={styles.areaButton}>
          <AntDesign name="setting" size={24} color="#333" />
        </View>
        <Text style={styles.labelButton}>Conta</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: 84,
    marginBottom: 16,
    marginTop: 16,
    paddingStart: 16,
    paddingEnd: 16,
  },
  actionButton: {
    marginRight: 32,
    alignItems: 'center',
  },
  areaButton: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dadada',
  },
  labelButton: {
    color: '#313030',
    marginTop: 4,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Actions;
