import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import testimg from '../../assets/image/testimage.png';

const Product = props => {
  return (
    <View style={styles.wrapper}>
      <Image source={testimg} style={styles.imageProduct} />
      <Text style={styles.productName}>New Error on Code</Text>
      <Text style={styles.productPrice}>On 10/11/2021</Text>
      <Text style={styles.location}>Surabaya</Text>
      <TouchableOpacity onPress={props.onButtonPress}>
        <View style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>BELI</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    backgroundColor: '#F2F2F2',
    width: 224,
    borderRadius: 8,
    marginLeft: 16,
    marginTop: 16,
  },
  imageProduct: {width: 200, height: 100, borderRadius: 8},
  productName: {fontSize: 14, fontWeight: '900', marginTop: 16},
  productPrice: {
    fontSize: 14,
    fontWeight: '900',
    marginTop: 16,
    color: '#F2944A',
  },
  location: {fontSize: 12, fontWeight: '300', marginTop: 16},
  buttonWrapper: {
    backgroundColor: '#6FCF97',
    paddingVertical: 6,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});
