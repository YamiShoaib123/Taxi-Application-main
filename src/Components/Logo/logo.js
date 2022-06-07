//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
// import NameLogo from '../../assets/Svgs/nameLogo.svg';
import styles from './logo.styles';

// create a component
const Logo = ({txt}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../Assets/Images/logo.png')}
      />
      <Text style={styles.text}>{txt}</Text>
    </View>
  );
};

export default Logo;
