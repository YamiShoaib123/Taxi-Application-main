import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../pages/login/login';
import Splash from '../pages/Splash/Splash';

const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Splash"
      // initialRouteName="Seller_Home"
      mode="modal">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Login"
        component={Login}
        // options={{
        //   headerShown: false,
        // }}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Splash"
        component={Splash}
        // options={{
        //   headerShown: false,
        // }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
