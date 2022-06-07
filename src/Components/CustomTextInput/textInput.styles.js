import {View, Text, StyleSheet} from 'react-native';
import {mvs} from '../../Global/Styles/Scalling';
import {fontFamily, fontSize} from '../../global/Styles/fonts';
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
    width: mvs(350),

    // backgroundColor: 'red',
    // borderColor: whiteGray,
    // borderBottomWidth: 1,
    // marginVertical: mvs(1),
    alignSelf: 'center',
    // paddingLeft: mvs(4),
    // paddingRight: mvs(5),
    marginTop: mvs(20),
  },
  input: {
    color: theme3,
    // fontSize: 14,
    // height: mvs(65),
    // paddingLeft: 3,
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
    // borderBottomLeftRadius: 5,
    // borderBottomRightRadius: 5,

    width: mvs(350),
    height: mvs(65),
    backgroundColor: 'transparent',
    color: white,
  },
});
export default styles;
