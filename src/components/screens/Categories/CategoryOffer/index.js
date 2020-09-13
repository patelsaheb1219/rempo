import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

//File Import
import ListItems from '../../common/ListItems';

class CategoryOffer extends Component {
  constructor(props) {
    super(props);

    this.state ={
      offers: [
        {
          idx: 1,
          name: 'Offer One',
          offers: [
            {
              idx: 1,
              name: 'Offer 1',
              generalTerms: [
                'Minimum Purchase: 1000',
                'Maximum discount: 100',
                'One Card One Offer'
              ]
            }
          ]
        },
        {
          idx: 2,
          name: 'Offer Two',
          offers: [
            {
              idx: 1,
              name: 'Offer 1',
              generalTerms: [
                'Minimum Purchase: 1000',
                'Maximum discount: 100',
                'One Card One Offer'
              ]
            }
          ]
        },
        {
          idx: 3,
          name: 'Offer Three',
          offers: [
            {
              idx: 1,
              name: 'Offer 1',
              generalTerms: [
                'Minimum Purchase: 1000',
                'Maximum discount: 100',
                'One Card One Offer'
              ]
            }
          ]
        },
        {
          idx: 4,
          name: 'Offer Four',
          offers: [
            {
              idx: 1,
              name: 'Offer 1',
              generalTerms: [
                'Minimum Purchase: 1000',
                'Maximum discount: 100',
                'One Card One Offer'
              ]
            }
          ]
        },
        {
          idx: 5,
          name: 'Offer Five',
          offers: [
            {
              idx: 1,
              name: 'Offer 1',
              generalTerms: [
                'Minimum Purchase: 1000',
                'Maximum discount: 100',
                'One Card One Offer'
              ]
            }
          ]
        },
        {
          idx: 6,
          name: 'Offer Six'
        },
        {
          idx: 7,
          name: 'Offer Seven'
        },
        {
          idx: 8,
          name: 'Offer Eight'
        },
        {
          idx: 9,
          name: 'Offer Nine'
        },
        {
          idx: 10,
          name: 'Offer Ten'
        },
        {
          idx: 11,
          name: 'Offer Elevan'
        },
        {
          idx: 12,
          name: 'Offer Twelve'
        },
        {
          idx: 13,
          name: 'Offer Therteen'
        },
        {
          idx: 14,
          name: 'Offer Fourteen'
        },
        {
          idx: 15,
          name: 'Offer Fifteen'
        },
      ]
    }
  }
  render() {
    const { offers } = this.state;
    return (
      <React.Fragment>
        <ListItems
          listItems={offers}
        />
      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default CategoryOffer;