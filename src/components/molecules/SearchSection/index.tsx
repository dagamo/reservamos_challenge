import React from 'react';
import {View} from 'react-native';
import {DestinationSearch} from '../../atoms/DestinationSearch';
import {Title} from '../../atoms/Title/index';
import {styles} from './styles';

export const SearchSection = () => {
  return (
    <View style={styles.searchSection}>
      <View style={{marginBottom: 20}}>
        <Title text="Reservamos" />
      </View>
      <DestinationSearch />
    </View>
  );
};
