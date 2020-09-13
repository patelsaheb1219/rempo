import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { ScrollView } from 'react-native';

class OfferCards extends Component {
  render() {
    const { navigation } = this.props;
    const offerList = this.props.route.params.offers;

    if (offerList && offerList.length > 0) {
      return (
        <ScrollView>
          {
            offerList.map(offer => {
              return (
                <Card style={{ margin: 10 }}>
                  <Card.Cover source={offer.image} />
                  <Card.Content>
                    <Title>{offer.name}</Title>
                    <Paragraph>{offer.description}</Paragraph>
                  </Card.Content>
                </Card>
              )
            })
          }
        </ScrollView>
      )
    } else {
      return <Title>Opps!! Currently, No Offers available from this shop</Title>
    }
    
  }
}


export default OfferCards;