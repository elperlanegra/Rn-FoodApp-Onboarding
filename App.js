import React from 'react';
import {Text, View, Image, Dimensions} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    keys: 'one',
    title: 'Fresh Food',
    text:
      'Occaecat labore veniam minim in elit elit fugiat qui tempor irure sint deserunt. Consequat nisi est cillum ut sint. Labore magna nostrud nostrud nisi sit deserunt proident in labore adipisicing laborum qui laboris anim.',
    image: require('./assets/1.png'),
  },
  {
    keys: 'two',
    title: 'Fast Delivery Food',
    text:
      'Occaecat labore veniam minim in elit elit fugiat qui tempor irure sint deserunt. Consequat nisi est cillum ut sint. Labore magna nostrud nostrud nisi sit deserunt proident in labore adipisicing laborum qui laboris anim.',
    image: require('./assets/2.png'),
  },
  {
    keys: 'three',
    title: 'Easy Payment',
    text:
      'Occaecat labore veniam minim in elit elit fugiat qui tempor irure sint deserunt. Consequat nisi est cillum ut sint. Labore magna nostrud nostrud nisi sit deserunt proident in labore adipisicing laborum qui laboris anim.',
    image: require('./assets/3.png'),
  },
];

const App = () => {
  state = {showHomePage: false};
  renderItem = ({item}) => {
    return (
      <View style={{flex: 1}}>
        <Image
          source={item.image}
          style={{
            resizeMode: 'contain',
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').width,
          }}
        />
        <Text style={{
            alignSelf: 'center',
            fontSize: 40,
            fontWeight: 'bold', 
            paddingTop: 30, 
            fontFamily: 'Verdana', 
            color: '#D48524',
        }}>{item.title}</Text>
        <Text style={{
            marginHorizontal: 30,
            fontSize: 20, 
            textAlign: 'center', 
            paddingTop: 40, 
            fontFamily: 'Verdana',
            opacity: 0.5,
            color: '#283542'
        }}>{item.text}</Text>

      </View>


    );
  };

  return <AppIntroSlider renderItem={renderItem} data={slides} 

    activeDotStyle={{
        backgroundColor: '#D48524',
        width: 30
    }}

  />;
};


export default App;
