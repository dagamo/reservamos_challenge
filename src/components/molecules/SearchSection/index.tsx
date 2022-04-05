import React from 'react';
import {View} from 'react-native';
import {DestinationSearch} from '../../atoms/DestinationSearch';
import {Title} from '../../atoms/Title/index';
import {styles} from './styles';

export const SearchSection = () => {
  return (
    <>
      <View style={styles.titleContainer}>
        <Title text="Reservamos" />
      </View>
      <DestinationSearch />
    </>
  );
};
