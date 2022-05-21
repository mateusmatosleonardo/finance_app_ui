import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './pages/Login';
import Home from './pages/Home';
import AuthProvider from './contexts/auth';

const Stack = createStackNavigator();

export type RootStackParamsList = {
  Home: undefined;
  Login: undefined;
};

function Routes() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}

export default Routes;