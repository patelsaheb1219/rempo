import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class CustomHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.goBack()} style={{  }}>
          <MaterialCommunityIcons name="arrow-left" color={'#000'} size={30} />
        </TouchableOpacity>
        <Text style={{ fontSize: 18 }}>
          {this.props.title}
        </Text>
        <TouchableOpacity>
          <MaterialCommunityIcons name="arrow-right" color={'#000'} size={30} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Platform.OS === 'ios' ? 0 : 24
  }
})

export default CustomHeader;