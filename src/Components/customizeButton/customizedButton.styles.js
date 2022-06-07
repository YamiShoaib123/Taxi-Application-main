import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {mvs} from '../../Global/Styles/Scalling';
import {fontFamily, fontSize} from '../../Global/Styles/Fonts';
import {
  gray,
  darkGray,
  white,
  whiteGray,
  theme2,
  theme,
  black,
  theme3,
} from '../../Global/Styles/Theme';

const styles = StyleSheet.create({
  container: {
    height: mvs(50),
    borderRadius: 10,
    width: mvs(350),
    backgroundColor: white,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: theme2,
    justifyContent: 'center',
    shadowColor: theme2,
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3.84,
    elevation: 3,
  },
  btnText: {
    color: black,
    fontFamily: fontFamily.UbuntuMedium,
    fontSize: 18,
    fontWeight: '500',
  },
});
export default styles;
