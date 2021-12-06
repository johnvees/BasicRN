import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BasicJavascript = () => {
  // 1 jeruk + 1 jeruk = 2 jeruk;
  // 1 j + 1 j = 2j;

  //primitive
  const nama = 'Yohanes Velly Sabattino'; //String
  let age = 21; //Number
  const jenisKelaminLaki = true; //Boolean

  //complex
  const hewanPeliharaan = {
    nama: 'Meow',
    jenis: 'Kucing',
    usia: 2,
    hewanLokal: true,
    warna: 'oren',
    orangTua: {
      jantan: 'King',
      betina: 'Queen',
    },
  }; //Object

  const sapaOrang = (name, age) => {
    return console.log(`Hello ${name} usia anda ${age}`); // Hello Yohanes Velly usia anda 21
  }; //Function

  sapaOrang('Yohanes Velly', 21);

  const namaOrang = ['Yohanes', 'Velly', 'Sabattino', 'Clementine']; //Object - array

  typeof namaOrang; //Object

  //jika hujan turun, maka kalau kerja bawa payung
  // jika perut lapar, maka harus makan

  //   if (hewanPeliharaan.nama == 'Meow') {
  //     console.log('Hello Meow');
  //   } else {
  //     console.log('Hewan Siapa ini');
  //   }

  const sapaHewan = objectHewan => {
    // let hasilSapa = '';
    // if (objectHewan.nama === 'Meow') {
    //   hasilSapa = 'Hello Meow';
    // } else {
    //   hasilSapa = 'Ini hewan siapaa?';
    // }
    // return hasilSapa;
    return objectHewan.nama === 'Meow'
      ? 'Hellow Meow apa kabar'
      : 'Ini hewan saiapaa??';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>
        Materi Basic Javascript di React Native
      </Text>
      <Text>Name: {nama}</Text>
      <Text>Usia: {age}</Text>

      <Text>{sapaHewan(hewanPeliharaan)}</Text>
      <Text>{namaOrang[0]}</Text>
      <Text>{namaOrang[1]}</Text>
      <Text>{namaOrang[2]}</Text>
      <Text>===Divider===</Text>
      {namaOrang.map(orang => (
        <Text>{orang}</Text>
      ))}
    </View>
  );
};

export default BasicJavascript;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  textTitle: {
    textAlign: 'center',
  },
});
