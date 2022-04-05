import {StyleSheet} from 'react-native';
import {theme} from '../../../utils/theme';
import {typographyColors} from '../../../utils/typographyColors';

export const styles = StyleSheet.create({
  input: {
    backgroundColor: theme.tertiary,
    borderRadius: 100,
    paddingHorizontal: 7,
    paddingVertical: 5,
  },
  text: {
    color: typographyColors.secondary,
  },
});
