import React from 'react';
import {Text, View} from 'react-native';
import {AuthContext} from '../../contexts/auth';

const Home = () => {
  const {user} = React.useContext(AuthContext);

  return (
    <View>
      <Text style={{color: '#333'}}>{user.name}</Text>
      <Text style={{color: '#333'}}>{user.status}</Text>
    </View>
  );
};

export default Home;
