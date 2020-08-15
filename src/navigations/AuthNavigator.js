//Module Imports
import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';

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
    if (this.state.user) {
      return <AppNavigation />
    } else {
      return <AuthNavigation />
    }
  }
}

export default AuthNavigator;