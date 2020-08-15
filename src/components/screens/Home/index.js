//Module Import
import React, { Component } from 'react';
import { Text, View } from 'react-native';

//File Import

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      carouselImages: []
    }
  }
  render() {
    return (
      <View>
        <Text>Home</Text>
      </View>
    )
  }
}

export default Home;