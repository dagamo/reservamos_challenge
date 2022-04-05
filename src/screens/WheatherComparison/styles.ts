import {StyleSheet} from 'react-native';
import {theme} from '../../utils/theme';

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: theme.background,
  },
  topSafeAreaView: {
    backgroundColor: theme.secondary,
  },
});
