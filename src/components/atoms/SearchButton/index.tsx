import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleProp,
  TouchableOpacityProps,
} from 'react-native';
import {IPadding} from '../../../interfaces/padding.interface';
import {styles} from './styles';

interface ISearchButton extends TouchableOpacityProps {
  placeholder: string;
  style?: StyleProp<IPadding>;
}
export const SearchButton = ({placeholder, style, ...rest}: ISearchButton) => {
  return (
    <TouchableOpacity {...rest}>
      <View style={[styles.input, style]}>
        <Text style={styles.text}>{placeholder}</Text>
      </View>
    </TouchableOpacity>
  );
};
