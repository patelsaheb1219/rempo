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

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      error: ''
    }
  }

  //LOGIN API call
  loginUser = async () => {
    const { username, password } = this.state;
    console.log('user', username, password)
  }

  render() {
    const { username, password } = this.state;
    const { navigation } = this.props;
    return (
      <ImageBackground
        source={BACKGROUND_IMAGE}
        resizeMode="repeat"
        style={styles.background}
      >
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <Title style={styles.title}>LOGIN</Title>

          <CustomTextInput
            mode={'outlined'}
            value={username}
            placeholder={'Username'}
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
            value={password}
            placeholder={'Password'}
            onChangeText={value => this.setState({ password: value })}
            placeholder={'Enter password'}
            secureTextEntry
            returnKeyType="done"
          />

          <View style={styles.forgotPassword}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPassword')}
            >
              <Text style={styles.label}>Forgot your password?</Text>
            </TouchableOpacity>
          </View>

          <Button mode="contained" onPress={this.loginUser}>
            Login
          </Button>

          <View style={styles.row}>
            <Text style={styles.label}>Don’t have an account? </Text>
            <Button mode="text" onPress={() => navigation.navigate('Signup')}>
              Sign Up
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
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    marginTop: 100
  },
  row: {
    marginTop: 4,
    alignItems: 'center',
  },
  label: {
    lineHeight: 25
  }
})

export default Login;