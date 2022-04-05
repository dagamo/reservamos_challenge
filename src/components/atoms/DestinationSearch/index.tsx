import React from 'react';
import {SearchButton} from '../SearchButton';
import {styles} from './styles';

export const DestinationSearch = () => {
  return (
    <SearchButton
      placeholder="Ingresa el destino"
      style={styles.destinationSearch}
    />
  );
};
