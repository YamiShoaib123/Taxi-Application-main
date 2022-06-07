import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {hp, mvs, wp} from '../../Global/Styles/Scalling';
import {fontFamily} from '../../Global/Styles/Fonts';
import {black} from '../../Global/Styles/Theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFCFD',
    justifyContent: 'center',
  },
  logo: {
    height: mvs(300),
    alignSelf: 'center',
    backgroundColor: 'transparent',
  },
  slogan: {
    marginTop: mvs(20),
    alignSelf: 'center',
    textAlign: 'center',
    color: black,
    fontSize: 18,
    fontFamily: fontFamily.Roboto_Regular,
    paddingHorizontal: mvs(60),
  },
});
export default styles;
