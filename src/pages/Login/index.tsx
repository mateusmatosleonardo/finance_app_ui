import React, {useContext} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Image,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {AuthContext} from '../../contexts/auth';
import Icon from 'react-native-vector-icons/FontAwesome';
import Brand from '../../assets/brand.png';
import {api} from '../../utils/api';

const Login = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({});

  const {signIn, loading} = useContext(AuthContext) as any;

  // function handlerLogin() {
  //   signIn(name, email, password);
  // }

  function handlerLogin() {
    api
      .post('/auth', {
        email: email,
        password: password,
      })
      .then(({data}) => {
        console.log(data);
      })
      .catch(err => console.log(...err));
  }

  console.log(email);
  console.log(password);

  return (
    <View style={styles.container}>
      <Image
        source={Brand}
        style={{width: 90, height: 108, marginBottom: 30}}
      />
      <View style={styles.contentInput}>
        <Text style={styles.titleInput}>Nome</Text>
        <Controller
          control={control}
          name="name"
          render={({field: {onBlur, onChange, value}}) => (
            <View style={styles.inputArea}>
              <TextInput
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                style={{paddingLeft: 8, color: '#444'}}
                maxLength={20}
              />
            </View>
          )}
        />
      </View>
      <View style={styles.contentInput}>
        <Text style={styles.titleInput}>E-mail</Text>
        <Controller
          control={control}
          name="email"
          render={({field: {onBlur, onChange, value}}) => (
            <View style={styles.inputArea}>
              <TextInput
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                style={{paddingLeft: 8, color: '#444'}}
                keyboardType={'email-address'}
              />
            </View>
          )}
        />
      </View>
      <View style={styles.contentInput}>
        <Text style={styles.titleInput}>Senha</Text>
        <Controller
          control={control}
          name="password"
          render={({field: {onBlur, onChange, value}}) => (
            <View style={styles.inputArea}>
              <TextInput
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                style={{paddingLeft: 8, color: '#444'}}
                secureTextEntry
              />
            </View>
          )}
        />
      </View>
      <TouchableOpacity
        style={styles.buttonSignIn}
        activeOpacity={0.8}
        onPress={handleSubmit(handlerLogin)}>
        {loading ? (
          <ActivityIndicator color={'#fafafa'} size="small" />
        ) : (
          <>
            <Text style={{color: '#fafafa', marginRight: 15, fontSize: 16}}>
              Sign-In
            </Text>
            <Icon name="sign-in" color="#fff" size={22} />
          </>
        )}
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
