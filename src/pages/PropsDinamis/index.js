import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const Story = props => {
  return (
    <View style={{alignItems: 'center', marginRight: 20, marginTop: 20}}>
      <Image
        source={{
          uri: props.gambar,
        }}
        style={{width: 50, height: 50, borderRadius: 50 / 2}}
      />
      <Text style={{maxWidth: 50, textAlign: 'center'}}>{props.nama}</Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View>
      <Text>Materi Component Props Dinamis</Text>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
          <Story
            nama="Cle"
            gambar="https://pps.whatsapp.net/v/t61.24694-24/s96x96/181639016_402369821510050_8826227316890006473_n.jpg?ccb=11-4&oh=5e403030460b517735312fe0dfa92e35&oe=61B0ABA0"
          />
          <Story
            nama="Yohanes Velly"
            gambar="https://pps.whatsapp.net/v/t61.24694-24/s96x96/242500366_874558973228545_4849781625986267585_n.jpg?ccb=11-4&oh=a99a5d094c936df07588d8f9300e24c5&oe=61B0B26F"
          />
          <Story
            nama="Cle"
            gambar="https://pps.whatsapp.net/v/t61.24694-24/s96x96/181639016_402369821510050_8826227316890006473_n.jpg?ccb=11-4&oh=5e403030460b517735312fe0dfa92e35&oe=61B0ABA0"
          />
          <Story
            nama="Yohanes Velly"
            gambar="https://pps.whatsapp.net/v/t61.24694-24/s96x96/242500366_874558973228545_4849781625986267585_n.jpg?ccb=11-4&oh=a99a5d094c936df07588d8f9300e24c5&oe=61B0B26F"
          />
          <Story
            nama="Cle"
            gambar="https://pps.whatsapp.net/v/t61.24694-24/s96x96/181639016_402369821510050_8826227316890006473_n.jpg?ccb=11-4&oh=5e403030460b517735312fe0dfa92e35&oe=61B0ABA0"
          />
          <Story
            nama="Yohanes Velly"
            gambar="https://pps.whatsapp.net/v/t61.24694-24/s96x96/242500366_874558973228545_4849781625986267585_n.jpg?ccb=11-4&oh=a99a5d094c936df07588d8f9300e24c5&oe=61B0B26F"
          />
          <Story
            nama="Cle"
            gambar="https://pps.whatsapp.net/v/t61.24694-24/s96x96/181639016_402369821510050_8826227316890006473_n.jpg?ccb=11-4&oh=5e403030460b517735312fe0dfa92e35&oe=61B0ABA0"
          />
          <Story
            nama="Yohanes Velly"
            gambar="https://pps.whatsapp.net/v/t61.24694-24/s96x96/242500366_874558973228545_4849781625986267585_n.jpg?ccb=11-4&oh=a99a5d094c936df07588d8f9300e24c5&oe=61B0B26F"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PropsDinamis;

const styles = StyleSheet.create({});
