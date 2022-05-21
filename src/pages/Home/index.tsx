import Header from '../../components/Header';
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {AuthContext} from '../../contexts/auth';
import Balance from '../../components/Balance';

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
  const {user} = React.useContext(AuthContext);

  return (
    <View>
      <Header userName={user.name} />

      <Balance balance="7.505,95" expenses="-490,00" />

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        data={list}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        renderItem={({item}) => <Text>Oi</Text>}
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
    marginTop: 18,
    color: '#313030',
  },
  list: {
    marginStart: 18,
    marginEnd: 18,
  },
});

export default Home;
