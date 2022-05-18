import React from 'react';
import {View, StyleSheet} from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputArea} />
      <View style={[styles.inputArea, {marginTop: 20}]} />
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
});

export default Login;
