import {View, Text, StyleSheet} from 'react-native';
import {hp, mvs, wp} from '../../global/Styles/scalling';
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
} from '../../global/Styles/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme,
  },
  flatlistItem: {
    marginHorizontal: mvs(18),
    width: mvs(360),
    height: mvs(234),
    borderRadius: 5,
    backgroundColor: theme3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatlistItemText: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: fontFamily.Roboto_Medium,
    color: black,
    paddingHorizontal: mvs(55),
    textAlign: 'center',
    textAlignVertical: 'center',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  deatilsContainer: {
    width: mvs(360),
    height: mvs(123),
    borderRadius: 5,
    backgroundColor: theme3,
    alignItems: 'center',
    marginTop: mvs(25),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  name: {
    fontSize: 18,
    lineHeight: 22,
    fontFamily: fontFamily.Roboto_Medium,
    color: white,
    marginTop: mvs(8),
  },
  favouriteFlatlistItem: {
    marginHorizontal: mvs(18),
    width: mvs(320),
    height: mvs(200),
    borderRadius: 5,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image_nameContainer: {
    flexDirection: 'row',
    // borderWidth: 1,
    // borderColor: 'red',
    width: mvs(280),
    justifyContent: 'space-between',
  },
  profileImage: {
    height: mvs(90),
    width: mvs(90),
    borderRadius: mvs(45),
    resizeMode: 'cover',
  },
  logo_arrowContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    // borderWidth: 1,
    borderColor: 'red',
    width: mvs(280),
    height: mvs(50),
    marginTop: mvs(30),
  },
  accessFreeButton: {
    width: mvs(209),
    height: mvs(27),
    borderRadius: 35,
    backgroundColor: white,
    borderWidth: 1,
    borderColor: black,
    marginTop: mvs(8),
    marginRight: mvs(110),
  },
});
export default styles;
