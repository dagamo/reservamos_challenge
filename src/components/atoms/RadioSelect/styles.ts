import {StyleSheet} from 'react-native';
import {theme} from '../../../utils/theme';

export const styles = StyleSheet.create({
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  active: {
    backgroundColor: theme.primary,
  },
  inactive: {
    backgroundColor: theme.tertiary,
  },
});
