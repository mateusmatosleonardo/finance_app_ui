import Header from '../../components/Header';
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {AuthContext} from '../../contexts/auth';
import Balance from '../../components/Balance';

const Home = () => {
  const {user} = React.useContext(AuthContext);

  return (
    <View>
      <Header userName={user.name} />
      <Balance balance="7.505,95" expenses="-490,00" />
    </View>
  );
};

export default Home;
