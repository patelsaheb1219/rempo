import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

//File Import

class Categories extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={styles.container}>
          <Text>Categories</Text>
        </View>
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

export default Categories;