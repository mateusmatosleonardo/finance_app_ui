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
import Trash from 'react-native-vector-icons/Feather';
import Bills from '../../components/Bills';
import Registered from '../../components/Registered';
import {theme} from '../../theme/theme';
import Button from '../../components/Button';

const list = [
  {
    id: 1,
    nameOfBills: 'Nubank',
    value: '232,63',
    dueDate: '25/06/2022',
    type: 0,
  },
  {
    id: 2,
    nameOfBills: 'Enpréstimo Nubank',
    value: '129,54',
    dueDate: '06/06/2022',
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
      <Modal transparent animationType="fade" visible={modalVisible}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          }}>
          <View style={styles.modal}>
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
            <View style={styles.containerButtons}>
              <Button
                action={() => setModalVisible(false)}
                style={{
                  width: 150,
                  height: 55,
                  borderRadius: 4,
                  backgroundColor: '#eeeeee',
                  borderWidth: 1,
                  borderColor: '#ccc',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: theme.fonts.Regular,
                    color: theme.colors.brandSecondary,
                  }}>
                  Ainda não
                </Text>
              </Button>
              <Button
                style={{
                  width: 150,
                  height: 55,
                  borderRadius: 4,
                  backgroundColor: theme.colors.primary,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: theme.fonts.Regular,
                    color: '#fafafa',
                  }}>
                  Sim
                </Text>
              </Button>
            </View>
            <View
              style={{
                width: '100%',
                height: 1,
                backgroundColor: '#ccc',
              }}
            />
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                paddingVertical: 20,
                paddingHorizontal: 10,
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <Trash
                name="trash-2"
                color="#f00"
                size={22}
                style={{marginRight: 10}}
              />
              <Text
                style={{
                  fontFamily: theme.fonts.Regular,
                  color: '#f00',
                }}>
                Deletar boleto?
              </Text>
            </TouchableOpacity>
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
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 40,
    marginTop: 20,
    marginBottom: 30,
  },
});

export default Home;
