import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {theme} from '../../theme/theme';
import Icon from 'react-native-vector-icons/Feather';

interface HeaderProps {
  userName: string;
}

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 8
  : 64;

const Header = ({userName}: HeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.username}>{userName}</Text>
        <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
          <Icon name="user" size={27} color="#fafafa" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    paddingTop: statusBarHeight,
    flexDirection: 'row',
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 44,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fafafa',
  },
  buttonUser: {
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;
