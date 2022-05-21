import React, {useContext} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {AuthContext} from '../../contexts/auth';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const {signIn} = useContext(AuthContext);

  function handlerLogin() {
    signIn(name, email, password);
    console.log(name, email, password);
  }

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 22,
          marginBottom: 20,
          fontWeight: 'bold',
          color: '#FF941A',
        }}>
        Seja bem vindo(a)!
      </Text>
      <View style={styles.contentInput}>
        <Text style={styles.titleInput}>Nome</Text>
        <View style={styles.inputArea}>
          <TextInput
            style={{paddingLeft: 8, color: '#444'}}
            maxLength={20}
            value={name}
            onChangeText={text => setName(text)}
          />
        </View>
      </View>
      <View style={styles.contentInput}>
        <Text style={styles.titleInput}>E-mail</Text>
        <View style={styles.inputArea}>
          <TextInput
            style={{paddingLeft: 8, color: '#444'}}
            keyboardType={'email-address'}
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </View>
      </View>
      <View style={styles.contentInput}>
        <Text style={styles.titleInput}>Senha</Text>
        <View style={styles.inputArea}>
          <TextInput
            style={{paddingLeft: 8, color: '#444'}}
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.buttonSignIn}
        activeOpacity={0.8}
        onPress={handlerLogin}>
        <Text style={{color: '#fff', marginRight: 15, fontSize: 16}}>
          Sign-In
        </Text>
        <Icon name="sign-in" color="#fff" size={22} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  inputArea: {
    width: '100%',
    height: 45,
    borderRadius: 8,
    backgroundColor: '#dedede',
  },
  contentInput: {
    width: '100%',
    marginBottom: 10,
  },
  titleInput: {
    fontSize: 15,
    color: '#444',
    marginBottom: 6,
  },
  buttonSignIn: {
    width: '80%',
    height: 45,
    marginTop: 15,
    borderRadius: 8,
    backgroundColor: '#FF941A',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
