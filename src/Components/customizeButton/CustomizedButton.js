import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {white, black, theme3, theme2} from '../../global/Styles/Theme';
import styles from './customizedButton.styles';

const CustomizeButton = ({
  title = 'kuch bhi',
  color = theme2,
  labelcolor = black,
  onPress,
  disable = false,
  style,
}) => {
  return (
    <TouchableOpacity
      disabled={disable}
      onPress={onPress}
      style={{...styles.container, ...style}}>
      <Text style={{...styles.btnText, color: labelcolor}}>{title}</Text>
    </TouchableOpacity>
  );
};
export default CustomizeButton;
