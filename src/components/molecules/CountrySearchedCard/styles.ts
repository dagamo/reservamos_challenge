import {StyleSheet} from 'react-native';
import {metrics} from '../../../utils/metrics';
import {theme} from '../../../utils/theme';

export const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.secondary,
    paddingHorizontal: metrics.paddingHorizontal,
    paddingVertical: 18,
  },
});
