import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {theme, theme2, white} from '../../Global/Styles/Theme';
import styles from './login.styles';
import {WebView} from 'react-native-webview';
const Login = ({navigation}) => {
  return (
    <SafeAreaView mode="margin" style={styles.container}>
      <StatusBar animated={true} backgroundColor={theme} />
      <WebView
        source={{
          uri: 'https://taxiaccounting.co.uk/backend/',
        }}
        style={{}}
      />
    </SafeAreaView>
  );
};

export default Login;
