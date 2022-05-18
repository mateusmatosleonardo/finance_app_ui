import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentInput}>
        <Text style={styles.titleInput}>Nome</Text>
        <View style={styles.inputArea}>
          <TextInput style={{paddingLeft: 8, color: '#444'}} maxLength={20} />
        </View>
      </View>
      <View style={styles.contentInput}>
        <Text style={styles.titleInput}>E-mail</Text>
        <View style={styles.inputArea}>
          <TextInput
            style={{paddingLeft: 8, color: '#444'}}
            keyboardType={'email-address'}
          />
        </View>
      </View>
      <View style={styles.contentInput}>
        <Text style={styles.titleInput}>Password</Text>
        <View style={styles.inputArea}>
          <TextInput style={{paddingLeft: 8, color: '#444'}} secureTextEntry />
        </View>
      </View>
      <TouchableOpacity style={styles.buttonSignIn} activeOpacity={0.8}>
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
    fontSize: 16,
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
