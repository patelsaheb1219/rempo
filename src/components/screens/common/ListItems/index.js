import React, { Component } from 'react';
import { List } from 'react-native-paper';
import { ScrollView } from 'react-native';

class ListItems extends Component {
  render() {
    const { listItems, navigation } = this.props;
    return (
      <ScrollView>
        {
          listItems && listItems.length && listItems.map((item, index) => {
            return (
              <List.Item
                key={index}
                title={item.name}
                right={props => <List.Icon {...props} icon="arrow-right" />}
                onPress={() => navigation.navigate('Offers', { offers: item.offers })}
              />
            )
          })
        }
      </ScrollView>
    )
  }
}

export default ListItems;