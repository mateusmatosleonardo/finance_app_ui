import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {theme} from './theme/theme';
import {View} from 'react-native';
import Login from './pages/Login';
import Home from './pages/Home';
import AuthProvider from './contexts/auth';
import HomeOutline from 'react-native-vector-icons/MaterialCommunityIcons';
import File from 'react-native-vector-icons/Feather';
import Plus from 'react-native-vector-icons/AntDesign';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export type RootStackParamsList = {
  Home: undefined;
  Login: undefined;
};

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {height: 68, backgroundColor: '#fafafa'},
          tabBarInactiveTintColor: theme.colors.brandSecondary,
          tabBarActiveTintColor: theme.colors.primary,
          tabBarIcon: ({color}) => (
            <HomeOutline name="home-outline" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Home2"
        component={Home}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {height: 68, backgroundColor: '#fafafa'},
          tabBarInactiveTintColor: theme.colors.brandSecondary,
          tabBarActiveTintColor: theme.colors.primary,
          tabBarIcon: () => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 60,
                height: 60,
                marginTop: -70,
                borderRadius: 5,
                backgroundColor: theme.colors.primary,
              }}>
              <Plus name="plus" color="#fafafa" size={26} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Home3"
        component={Home}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {height: 68, backgroundColor: '#fafafa'},
          tabBarInactiveTintColor: theme.colors.brandSecondary,
          tabBarActiveTintColor: theme.colors.primary,
          tabBarIcon: ({color}) => (
            <File name="file-text" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Routes() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator initialRouteName="Tabs">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}

export default Routes;
