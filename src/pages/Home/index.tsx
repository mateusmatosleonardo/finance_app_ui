import Header from '../../components/Header';
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {AuthContext} from '../../contexts/auth';
import Movements from '../../components/Movements';
import Registered from '../../components/Registered';
import {theme} from '../../theme/theme';

const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '130,00',
    date: '25/05/2022',
    type: 0,
  },
  {
    id: 2,
    label: 'Pix cliente x',
    value: '1.900,00',
    date: '18/05/2022',
    type: 1,
  },
  {
    id: 3,
    label: 'Salário',
    value: '3.500,00',
    date: '30/04/2022',
    type: 1,
  },
];

const Home = () => {
  const {user} = React.useContext(AuthContext) as {user: any};

  return (
    <View>
      <Header userName={user.name ? user.name : 'Mateus'} />

      <Registered numberOfTickets={5} />

      <Text style={styles.title}>Meus boletos</Text>

      <View style={styles.diviser} />

      <FlatList
        data={list}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        renderItem={({item}) => <Movements data={item} />}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 18,
    marginRight: 18,
    marginTop: 24,
    color: theme.colors.brandSecondary,
    marginBottom: 24,
  },
  list: {
    marginStart: 18,
    marginEnd: 18,
  },
  diviser: {
    height: 1,
    marginStart: 18,
    marginEnd: 18,
    marginBottom: 24,
    backgroundColor: '#dedede',
  },
});

export default Home;
