import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {theme} from '../../theme/theme';
import Barcode from '../../assets/barcode.png';

interface RegisteredProps {
  numberOfTickets: number;
}

const Registered = ({numberOfTickets}: RegisteredProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Image
          source={Barcode}
          style={{width: 56, height: 34, resizeMode: 'contain'}}
        />
        <View
          style={{
            width: 1.5,
            height: 34,
            marginHorizontal: 22,
            backgroundColor: '#fafafa',
          }}
        />
      </View>
      <View>
        <View style={styles.contentInfoText}>
          <Text style={styles.text}>Você tem </Text>
          <Text style={styles.textBold}>{numberOfTickets} boletos</Text>
        </View>
        <Text style={styles.text}>cadastrados para pagar</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -42,
    marginStart: 18,
    marginEnd: 18,
    borderRadius: 4,
    paddingBottom: 18,
    paddingTop: 18,
    backgroundColor: theme.colors.brandSecondary,
    elevation: 1,
    zIndex: 99,
  },
  item: {
    flexDirection: 'row',
  },
  itemTitle: {
    fontSize: 20,
    color: '#ccc',
  },
  text: {
    fontFamily: theme.fonts.Regular,
    color: '#fafafa',
  },
  textBold: {
    fontFamily: theme.fonts.Bold,
    color: '#fafafa',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentInfoText: {
    flexDirection: 'row',
  },
});

export default Registered;
