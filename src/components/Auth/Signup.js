import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  ImageBackground,
  View,
  TouchableOpacity
} from 'react-native';
import { Title, Button } from 'react-native-paper';

//File Import
import CustomTextInput from '../screens/common/CustomTextInput';

//default consts
const BACKGROUND_IMAGE = require("../../../assets/background.png");

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      mobileNumber: '',
      error: '',
    }
  }

  //SIGNUP API call
  loginUser = async () => {
    const { username, password, mobileNumber } = this.state;
    console.log('user', username, password, mobileNumber)
  }

  render() {
    const { username, password, mobileNumber } = this.state;
    const { navigation } = this.props;
    return (
      <ImageBackground
        source={BACKGROUND_IMAGE}
        resizeMode="repeat"
        style={styles.background}
      >
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <Title style={styles.title}>REGISTER</Title>

          <CustomTextInput
            mode={'outlined'}
            value={username}
            onChangeText={value => this.setState({ username: value })}
            placeholder={'Enter username'}
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
            returnKeyType="next"
          />

          <CustomTextInput
            mode={'outlined'}
            value={mobileNumber}
            onChangeText={value => this.setState({ mobileNumber: value })}
            placeholder={'Enter Mobile Number'}
            autoCapitalize="none"
            keyboardType="numeric"
            returnKeyType="next"
          />

          <CustomTextInput
            mode={'outlined'}
            value={password}
            onChangeText={value => this.setState({ password: value })}
            placeholder={'Enter password'}
            secureTextEntry
            returnKeyType="done"
          />

          <Button mode="contained" onPress={this.loginUser} style={{ marginTop: 20 }}>
            sign up
          </Button>

          <View style={styles.row}>
            <Text style={styles.label}>Already Connected with Us? </Text>
            <Button mode="text" onPress={() => navigation.navigate('Login')}>
              Login
            </Button>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 15,
    marginTop: 5
  },
  background: {
    flex: 1,
    width: '100%'
  },
  container: {
    padding: 20,
    width: '100%',
    marginTop: 100
  },
  row: {
    marginTop: 4,
    alignItems: 'center',
  },
  label: {
    lineHeight: 20
  }
})


export default Signup;