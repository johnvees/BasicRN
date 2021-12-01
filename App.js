import React, {Component} from 'react';
import {Text, View, Image, TextInput, StyleSheet} from 'react-native';
import testimg from './testimage.png';

const App = () => {
  return <StylingReactNativeComponent />;
};

const StylingReactNativeComponent = () => {
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

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#000000'}} />
      <Text>Saya</Text>
      <Lainnya />
      <Text>Saya</Text>
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

const Lainnya = () => {
  return <Text>Lain-Lainnya</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/100/100/people'}}
      style={{width: 100, height: 100}}
    />
  );
};

class BoxGreen extends Component {
  render() {
    return <Text>Ini component dari class</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/100/100/tech'}}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <Text style={{color: 'blue', fontSize: 24, fontStyle: 'italic'}}>
          Headset
        </Text>
      </View>
    );
  }
}

export default App;
