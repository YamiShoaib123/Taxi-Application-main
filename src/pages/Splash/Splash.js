import React, {useEffect} from 'react';
import {View, Image, TouchableOpacity, StatusBar, Text} from 'react-native';
import styles from './splash.styles';
import Logo from '../../Assets/Images/logo.png';

const Splash = ({navigation}) => {
  useEffect(() => {
    const subscribe = navigation.addListener('focus', () => {
      setTimeout(() => {
        navigation.replace('Login');
      }, 3000);
    });
    return subscribe;
  }, [navigation]);

  return (
    <TouchableOpacity
      // onPress={() => navigation.replace('Landing')}
      activeOpacity={1}
      style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={'black'} />
      <Image style={styles.logo} source={Logo} resizeMode="contain" />
      <Text style={styles.slogan}>
        Unique Self Assessment Accounting System
      </Text>
    </TouchableOpacity>
  );
};

export default Splash;
