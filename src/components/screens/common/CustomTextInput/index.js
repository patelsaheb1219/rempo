import React from 'react';
import { TextInput, withTheme } from 'react-native-paper';

const CustomTextInput = (props) => {
  const { colors } = props.theme;
  return (
    <TextInput 
      mode={props.mode}
      label={props.label}
      value={props.value}
      onChangeText={props.onChangeText}
      placeholder={props.placeholder}
      style={[props.style, { height: 40 }]}
      underlineColor={colors.primary}
      secureTextEntry={props.secureTextEntry}
      autoCapitalize={props.autoCapitalize}
      autoCompleteType={props.autoCompleteType}
      textContentType={props.textContentType}
      keyboardType={props.keyboardType}
      returnKeyType={props.returnKeyType}
    />
  )
}


export default withTheme(CustomTextInput);