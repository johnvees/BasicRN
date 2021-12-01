import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';

class MateriFlexBox extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{backgroundColor: 'red', width: 50, height: 50}} />
          <View style={{backgroundColor: 'yellow', width: 50, height: 50}} />
          <View style={{backgroundColor: 'green', width: 50, height: 50}} />
          <View style={{backgroundColor: 'violet', width: 50, height: 50}} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text>Beranda</Text>
          <Text>Videos</Text>
          <Text>Playlist</Text>
          <Text>Channel</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
            marginLeft: 16,
          }}>
          <Image
            source={{uri: 'https://placeimg.com/100/100/nature'}}
            style={{width: 100, height: 100, borderRadius: 50, marginRight: 14}}
          />
          <View>
            <Text style={{fontSize: 20, fontWeight: '900'}}>
              Yohanes Velly Sabattino
            </Text>
            <Text>1k Subscribers</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default MateriFlexBox;
