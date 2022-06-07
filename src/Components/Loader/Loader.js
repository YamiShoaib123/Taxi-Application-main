//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import styles from './loader.styles';
import ReactNativeModal from 'react-native-modal';
import {black, white} from '../../global/Styles/theme';
const Loader = ({visible}) => {
  return (
    <ReactNativeModal
      backdropColor={black}
      backdropOpacity={0.8}
      isVisible={visible}
      style={styles.container}>
      <ActivityIndicator color={white} size="large" />
    </ReactNativeModal>
  );
};

export default Loader;
