import {StyleSheet} from 'react-native';
import {fonts} from '../../../utils/fonts';
import {theme} from '../../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.primary,
    flexDirection: 'row',
    borderRadius: 15,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'space-between',
  },
  text: {
    textAlignVertical: 'center',
    fontFamily: fonts.regular,
    color: theme.secondary,
  },
});
