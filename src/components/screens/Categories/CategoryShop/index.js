import React, { Component } from 'react';

//File Import
import ListItems from '../../common/ListItems';
const OFFER_ONE = require('../../../../../assets/offer_1.png');
const OFFER_TWO = require('../../../../../assets/offer_2.jpeg');

class CategoryShop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shops: [
        {
          idx: 1,
          name: 'Shop One',
          offers: [
            {
              idx: 1,
              name: 'Offer 1',
              description: 'Brand New Season Brand New Offer',
              image: OFFER_ONE,
              generalTerms: [
                'Minimum Purchase: 1000',
                'Maximum discount: 100',
                'One Card One Offer'
              ]
            },
            {
              idx: 2,
              name: 'Offer 2',
              description: 'Brand New Season Brand New Offer',
              image: OFFER_TWO,
              generalTerms: [
                'Minimum Purchase: 1000',
                'Maximum discount: 100',
                'One Card One Offer'
              ]
            },
            {
              idx: 3,
              name: 'Offer 3',
              description: 'Brand New Season Brand New Offer',
              image: OFFER_TWO,
              generalTerms: [
                'Minimum Purchase: 1000',
                'Maximum discount: 100',
                'One Card One Offer'
              ]
            },{
              idx: 4,
              name: 'Offer 4',
              description: 'Brand New Season Brand New Offer',
              image: OFFER_TWO,
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
          name: 'Shop Two',
          offers: [
            {
              idx: 1,
              name: 'Offer 1',
              description: 'Brand New Season Brand New Offer',
              image: OFFER_TWO,
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
          name: 'Shop Three',
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
          name: 'Shop Four',
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
          name: 'Shop Five',
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
          name: 'Shop Six'
        },
        {
          idx: 7,
          name: 'Shop Seven'
        },
        {
          idx: 8,
          name: 'Shop Eight'
        },
        {
          idx: 9,
          name: 'Shop Nine'
        },
        {
          idx: 10,
          name: 'Shop Ten'
        },
        {
          idx: 11,
          name: 'Shop Elevan'
        },
        {
          idx: 12,
          name: 'Shop Twelve'
        },
        {
          idx: 13,
          name: 'Shop Therteen'
        },
        {
          idx: 14,
          name: 'Shop Fourteen'
        },
        {
          idx: 15,
          name: 'Shop Fifteen'
        },
      ]
    }
  };



  render() {
    const { shops } = this.state;
    const { navigation } = this.props;
    return (
      <React.Fragment>
        <ListItems
          listItems={shops}
          navigation={navigation}
        />
      </React.Fragment>
    )
  }
}

export default CategoryShop;