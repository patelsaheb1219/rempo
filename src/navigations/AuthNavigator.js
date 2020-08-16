//Module Imports
import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, View } from 'react-native';

//File Imports
import AuthNavigation from './AuthNavigation';
import AppNavigation from './AppNavigation';

class AuthNavigator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    }

  }
  componentDidMount = async() => {
    await AsyncStorage.setItem("user", "kaumik1219@gmail.com");
    const user = await AsyncStorage.getItem("user");
    await this.setState({ user });
  }
  
  render() {
    return (
      <React.Fragment>
        {this.state.user ? <AppNavigation /> :  <AuthNavigation />}
      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 18
  }
});

export default AuthNavigator;