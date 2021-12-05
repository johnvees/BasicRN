import React, {Component, useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';

// class FlexBox extends Component {
//   constructor(props) {
//     super(props);
//     console.log('===> constructor');
//     this.state = {
//       subscriber: 100,
//     };
//   }

//   componentDidMount() {
//     console.log('===> component did mount');
//     setTimeout(() => {
//       this.setState({
//         subscriber: 400,
//       });
//     }, 2000);
//   }

//   componentDidUpdate() {
//     console.log('===> component did update');
//   }

//   componentWillUnmount() {
//     console.log('===> component will unmount');
//   }
//   render() {
//     console.log('===> render');
//     return (
//       <View>
//         <View
//           style={{
//             flexDirection: 'row',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//           }}>
//           <View style={{backgroundColor: 'red', width: 50, height: 50}} />
//           <View style={{backgroundColor: 'yellow', width: 50, height: 50}} />
//           <View style={{backgroundColor: 'green', width: 50, height: 50}} />
//           <View style={{backgroundColor: 'violet', width: 50, height: 50}} />
//         </View>
//         <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
//           <Text>Beranda</Text>
//           <Text>Videos</Text>
//           <Text>Playlist</Text>
//           <Text>Channel</Text>
//         </View>
//         <View
//           style={{
//             flexDirection: 'row',
//             alignItems: 'center',
//             marginTop: 20,
//             marginLeft: 16,
//           }}>
//           <Image
//             source={{uri: 'https://placeimg.com/100/100/nature'}}
//             style={{width: 100, height: 100, borderRadius: 50, marginRight: 14}}
//           />
//           <View>
//             <Text style={{fontSize: 20, fontWeight: '900'}}>
//               Yohanes Velly Sabattino
//             </Text>
//             <Text>{this.state.subscriber} Subscribers</Text>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

const FlexBox = () => {
  const [subscriber, setSubscriber] = useState(400);
  useEffect(() => {
    console.log('did mount');
    setTimeout(() => {
      setSubscriber(600);
    }, 2000);
    return () => {
      console.log('did update');
    };
  }, [subscriber]);

  // useEffect(() => {
  //   console.log('did update');
  //   setTimeout(() => {
  //     setSubscriber(600);
  //   }, 2000);
  // }, [subscriber]);
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
          <Text>{subscriber} Subscribers</Text>
        </View>
      </View>
    </View>
  );
};

export default FlexBox;
