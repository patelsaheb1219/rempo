//Module Import
import React, { Component } from 'react';
import { View } from 'react-native';

//File Import
import { styleRules } from './styles';
import ImageCarousel from '../common/ImageCarousel';
import CustomCard from '../common/CustomCard';

//default consts
const OFFER_ONE = require('../../../../assets/offer_1.png');
const OFFER_TWO = require('../../../../assets/offer_2.jpeg');
const OFFER_THREE = require('../../../../assets/offer_3.jpeg');
const OFFER_FOUR = require('../../../../assets/offer_4.jpeg');
const OFFER_FIVE = require('../../../../assets/offer_5.jpeg');
const OFFER_SIX = require('../../../../assets/offer_6.jpeg');

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      carouselImages: [
        {
          index: 1,
          path: OFFER_ONE 
        },
        {
          index: 2,
          path: OFFER_TWO 
        },
        {
          index: 3,
          path: OFFER_THREE 
        },
        {
          index: 4,
          path: OFFER_FOUR
        },
        {
          index: 5,
          path: OFFER_FIVE
        },
        {
          index: 6,
          path: OFFER_SIX
        },
      ]
    }
  }
  render() {
    const { carouselImages } = this.state;
    return (
      <View style={styleRules.container}>
        <ImageCarousel 
          carouselImages={carouselImages}
        />
        <View style={{ marginTop: 15 }}>
          <CustomCard 
            offerArray={carouselImages}
            title={`Today's offer`}
          />
        </View>

        <View style={{ marginTop: 15 }}>
          <CustomCard 
            offerArray={carouselImages}
            title={`Exclusive offer`}
          />
        </View>
      </View>
    )
  }
}

export default Home;