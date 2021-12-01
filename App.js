import React from 'react';
import {View, ScrollView} from 'react-native';

import SampleComponent from './SampleComponent';
import StylingReactNativeComponent from './StylingRNComponent';
import MateriFlexBox from './FlexBox';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingReactNativeComponent /> */}
        <MateriFlexBox />
      </ScrollView>
    </View>
  );
};

export default App;
