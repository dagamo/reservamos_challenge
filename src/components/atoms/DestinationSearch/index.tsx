import React from 'react';
import {SearchButton} from '../SearchButton';
import {styles} from './styles';

interface IDestinationSearch {
  placeholder: string;
  onPress: () => void;
}
export const DestinationSearch = ({
  placeholder,
  onPress,
}: IDestinationSearch) => {
  return (
    <SearchButton
      placeholder={placeholder}
      style={styles.destinationSearch}
      onPress={onPress}
    />
  );
};
