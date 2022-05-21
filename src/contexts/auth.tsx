import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamsList} from 'routes';
import {NavigationProp} from '@react-navigation/native';

export const AuthContext = React.createContext({});

type SignInScreenProps = NavigationProp<RootStackParamsList, 'Home'>;

const AuthProvider = ({children}: any) => {
  const [user, setUser] = React.useState({});
  const navigation = useNavigation<SignInScreenProps>();

  function signIn(name: string, email: string, password: string) {
    if (email !== '' && password !== '') {
      setUser({
        name: name,
        email: email,
        status: 'Ativo',
      });
      navigation.navigate('Home');
    }
  }

  return (
    <AuthContext.Provider value={{signIn, user}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
