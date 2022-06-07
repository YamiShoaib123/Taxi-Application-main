//import liraries
import {placeholder} from '@babel/types';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {
  black,
  gray,
  theme,
  theme2,
  theme3,
  white,
} from '../../Global/Styles/Theme';
import styles from './textInput.styles';
const CustomTextInput = ({
  value,
  setValue,
  placeholder,
  label,
  style,
  secure = false,
  keyboardType = 'email-address',
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        label={label}
        value={value}
        secureTextEntry={secure}
        onChangeText={text => setValue(text)}
        placeholderTextColor={white}
        placeholder={placeholder}
        underlineColor={white}
        outlineColor={white}
        keyboardType="name-phone-pad"
        theme={{
          colors: {
            placeholder: 'white',
            text: white,
            primary: white,
            default: white,
          },
        }}
        style={styles.input}
      />
    </View>
  );
};

export default CustomTextInput;
