import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import testimg from '../../assets/image/testimage.png';

const StylingComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'blue',
          borderWidth: 2,
          borderColor: 'violet',
          marginTop: 16,
          marginLeft: 16,
        }}
      />
      <View
        style={{
          padding: 12,
          backgroundColor: '#F2F2F2',
          width: 224,
          borderRadius: 8,
          marginLeft: 16,
          marginTop: 16,
        }}>
        <Image
          source={testimg}
          style={{width: 200, height: 100, borderRadius: 8}}
        />
        <Text style={{fontSize: 14, fontWeight: '900', marginTop: 16}}>
          New Error on Code
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '900',
            marginTop: 16,
            color: '#F2944A',
          }}>
          On 10/11/2021
        </Text>
        <Text style={{fontSize: 12, fontWeight: '300', marginTop: 16}}>
          Surabaya
        </Text>
        <View
          style={{
            backgroundColor: '#6FCF97',
            paddingVertical: 6,
            borderRadius: 25,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            BELI
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '900',
    color: 'violet',
    marginLeft: 16,
    marginTop: 16,
  },
});

export default StylingComponent;
