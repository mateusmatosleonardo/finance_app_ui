import React from 'react';
import Header from '../../components/Header';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {AuthContext} from '../../contexts/auth';
import Bills from '../../components/Bills';
import Registered from '../../components/Registered';
import {theme} from '../../theme/theme';

const list = [
  {
    id: 1,
    nameOfBills: 'Nubank',
    value: '130,00',
    dueDate: '25/05/2022',
    type: 0,
  },
  {
    id: 2,
    nameOfBills: 'Pix cliente x',
    value: '1.900,00',
    dueDate: '18/05/2022',
    type: 1,
  },
  {
    id: 3,
    nameOfBills: 'Salário',
    value: '3.500,00',
    dueDate: '30/04/2022',
    type: 1,
  },
];

const Home = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalItem, setModalItem] = React.useState<any>({});
  const {user} = React.useContext(AuthContext) as {user: any};

  function openModal(item: any) {
    setModalVisible(true);
    setModalItem(item);
  }

  return (
    <>
      <View>
        <Header userName={user.name ? user.name : 'Mateus'} />

        <Registered numberOfTickets={list.length} />

        <Text style={styles.title}>Meus boletos</Text>

        <View style={styles.diviser} />

        <FlatList
          data={list}
          keyExtractor={item => String(item.id)}
          showsVerticalScrollIndicator={false}
          overScrollMode="never"
          renderItem={({item}) => (
            <Bills data={item} openModal={() => openModal(item)} />
          )}
          style={styles.list}
        />
      </View>
      <Modal transparent animationType="slide" visible={modalVisible}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          }}>
          <View style={styles.modal}>
            <TouchableOpacity
              style={{width: 30, height: 30, backgroundColor: 'red'}}
              onPress={() => setModalVisible(false)}
            />
            <View style={styles.handlerModal} />
            <View style={[styles.contentText, {marginTop: 24}]}>
              <Text style={styles.textModal}>O boleto </Text>
              <Text
                style={{
                  fontFamily: theme.fonts.Bold,
                  fontSize: 18,
                  color: theme.colors.brandSecondary,
                }}>
                {modalItem.nameOfBills}
              </Text>
            </View>
            <View style={styles.contentText}>
              <Text style={styles.textModal}>no valor de R$ </Text>
              <Text
                style={{
                  fontFamily: theme.fonts.Bold,
                  fontSize: 18,
                  color: theme.colors.brandSecondary,
                }}>
                {modalItem.value}
              </Text>
            </View>
            <Text
              style={{
                fontFamily: theme.fonts.Regular,
                fontSize: 18,
                color: theme.colors.brandSecondary,
              }}>
              foi pago?
            </Text>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 18,
    marginRight: 18,
    marginTop: 24,
    color: theme.colors.brandSecondary,
    marginBottom: 24,
  },
  list: {
    marginStart: 18,
    marginEnd: 18,
  },
  diviser: {
    height: 1,
    marginStart: 18,
    marginEnd: 18,
    marginBottom: 24,
    backgroundColor: '#dedede',
  },
  contentModal: {
    paddingHorizontal: 40,
    paddingVertical: 50,
  },
  textModal: {
    fontSize: 18,
    fontFamily: theme.fonts.Regular,
    color: theme.colors.brandSecondary,
  },
  modal: {
    width: '100%',
    height: 300,
    alignItems: 'center',
    backgroundColor: '#fafafa',
  },
  handlerModal: {
    width: 58,
    height: 4,
    borderRadius: 4,
    marginTop: 12,
    backgroundColor: '#ccc',
  },
  contentText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
