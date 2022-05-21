import Header from '../../components/Header';
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {AuthContext} from '../../contexts/auth';

const Home = () => {
  const {user} = React.useContext(AuthContext);

  return (
    <ScrollView>
      <Header userName={user.name} />
    </ScrollView>
  );
};

export default Home;
