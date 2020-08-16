//Module Imports
import React, { Component } from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { Dimensions, View } from 'react-native';

//File Imports
import { styleRules } from './styles';

//default consts
const { width: screenWidth } = Dimensions.get('window');


class ImageCarousel extends Component {

  //renderImages
  renderImages = ({item, index}, parallaxProps) => {
    return (
      <View style={styleRules.item}>
        <ParallaxImage
        source={item.path}
        parallaxFactor={0.4}
        containerStyle={styleRules.imageContainer}
        style={styleRules.image}
        {...parallaxProps}
      />
      </View>
    )
  };

  render() {
    const { carouselImages } = this.props;
    return (
      <Carousel 
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={carouselImages}
        renderItem={this.renderImages}
        hasParallaxImages={true}
        autoplay={true}
        loop={true}
      />
    )
  }
}

export default ImageCarousel;