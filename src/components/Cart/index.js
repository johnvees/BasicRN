import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Cart = props => {
  return (
    <View>
      <View style={styles.cartWrapper}>
        <Image
          source={{uri: 'https://placeimg.com/100/100/animals/grayscale'}}
          style={styles.icon}
        />
        <Text style={styles.notif}>{props.qty}</Text>
      </View>
      <Text style={styles.text}>Keranjang Belanja</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  wrapper: {padding: 20, alignItems: 'center'},
  icon: {width: 50, height: 50},
  cartWrapper: {
    borderWidth: 1,
    borderColor: 'grey',
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginTop: 40,
  },
  text: {fontSize: 20, color: '#777777', fontWeight: '900', marginTop: 8},
  notif: {
    fontSize: 16,
    color: 'white',
    backgroundColor: '#6FCF97',
    padding: 4,
    borderRadius: 25,
    width: 24,
    height: 24,
    textAlign: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
