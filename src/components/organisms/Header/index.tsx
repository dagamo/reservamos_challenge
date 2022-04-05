import React from 'react';
import {View} from 'react-native';
import {SearchSection} from '../../molecules/SearchSection';
import {styles} from './styles';

export const Header = () => {
  return (
    <View style={styles.container}>
      <SearchSection />
    </View>
  );
};
