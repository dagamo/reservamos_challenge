import {StyleSheet} from 'react-native';
import {metrics} from '../../../utils/metrics';
import {theme} from '../../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    height: 160,
    justifyContent: 'space-between',
    backgroundColor: theme.secondary,
    paddingTop: 10,
    paddingBottom: 25,
    paddingHorizontal: metrics.paddingHorizontal,
  },
});
