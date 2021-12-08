import axios, * as others from 'axios';
import React, {useState} from 'react';
import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';

const Item = () => {
  return (
    <View style={styles.itemContainer}>
      <Image
        source={{uri: 'https://placeimg.com/150/150/people'}}
        style={styles.avatar}
      />
      <View style={styles.desc}>
        <Text style={styles.descName}>Nama Lengkap</Text>
        <Text style={styles.descEmail}>Email</Text>
        <Text style={styles.descBidang}>Bidang</Text>
      </View>
      <Text style={styles.delete}>X</Text>
    </View>
  );
};

const LocalAPI = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bidang, setBidang] = useState('');

  const submit = () => {
    const data = {
      name,
      email,
      bidang,
    };
    console.log('data before send: ', data);
    axios.post(' https://192.168.3.35:3004/users', data).then(res => {
      console.log('res: ', res);
      setName('');
      setEmail('');
      setBidang('');
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Local API (JSON Server)</Text>
      <Text>Masukkan Anggota Coba-Coba</Text>
      <TextInput
        placeholder="Nama Lengkap"
        style={styles.input}
        value={name}
        onChangeText={value => setName(value)}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={value => setEmail(value)}
      />
      <TextInput
        placeholder="Bidang"
        style={styles.input}
        value={bidang}
        onChangeText={value => setBidang(value)}
      />
      <Button title="Simpan" onPress={submit} />
      <View style={styles.line} />
      <Item />
      <Item />
      <Item />
    </View>
  );
};

export default LocalAPI;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  textTitle: {
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 12,
    paddingHorizontal: 18,
  },
  line: {
    height: 2,
    backgroundColor: 'black',
    marginVertical: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
  },
  itemContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  desc: {
    marginLeft: 16,
    flex: 1,
  },
  descName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  descEmail: {
    fontSize: 16,
  },
  descBidang: {
    fontSize: 12,
    marginTop: 6,
  },
  delete: {
    marginRight: 16,
    fontSize: 20,
    fontWeight: '900',
    color: 'red',
  },
});
