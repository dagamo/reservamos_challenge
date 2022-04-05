import React from 'react';
import {View} from 'react-native';
import {HeaderBehaviour} from '../../../behaviours/header/header';
import {DestinationSearch} from '../../atoms/DestinationSearch';
import {Title} from '../../atoms/Title/index';
import {styles} from './styles';

export const SearchSection = (props: HeaderBehaviour) => {
  const {title, onPressSearchButton, searchPlaceholder} = props;
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Title text={title} />
      </View>
      <DestinationSearch
        placeholder={searchPlaceholder}
        onPress={onPressSearchButton}
      />
    </View>
  );
};
