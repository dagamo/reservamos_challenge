import React from 'react';
import {View} from 'react-native';
import {HeaderBehaviour} from '../../../behaviours/header/header';
import {SearchSection} from '../../molecules/SearchSection';
import {styles} from './styles';

export const Header = (props: HeaderBehaviour) => {
  return (
    <View style={styles.container}>
      <SearchSection {...props} />
    </View>
  );
};
