import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import IllustrationStar from '../../assets/image/ic_star.svg';

const ReactNativeSvg = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.TextTitle}>
        Materi Menggunakan File SVG didalam React Native
      </Text>
      <IllustrationStar width={244} height={125} />
    </View>
  );
};

export default ReactNativeSvg;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  TextTitle: {
    textAlign: 'center',
  },
});
