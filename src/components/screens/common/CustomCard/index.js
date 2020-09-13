//Module Imports
import React, { Component } from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import { Card, Title, Button } from 'react-native-paper';

//File Imports
import { styleRules } from './styles';

class CustomCard extends Component {
  render() {
    const { offerArray, title } = this.props;
    return (
      <Card style={{ height: 160 }}>
        <Card.Content>
          <Title>{title}</Title>
          <ScrollView style={styleRules.contentContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
            {
              offerArray && offerArray.map((obj, index) => {
                return (
                  // <View key={index} style={{ flexDirection: 'column' }}>
                  //   <View style={styleRules.imageContainer} key={obj.index}>
                  //     <Image
                  //       source={obj.path}
                  //       style={styleRules.image}
                  //     />
                  //   </View>
                  //   <Text>Offer {obj.index}</Text>
                  // </View>
                  <View key={index}>
                    <Image 
                      source={obj.path}
                      style={{ width: 70, height: 70, margin: 5, borderRadius: 5 }}
                    />
                    <View style={{ textAlign: 'center', alignItems: 'center' }}>
                      <Text>Offer {obj.index}</Text>
                    </View>
                  </View>
                )
              })
            }
          </ScrollView>
        </Card.Content>
        <Card.Actions>
          <Button></Button>
        </Card.Actions>
      </Card>
    )
  }
}

export default CustomCard;