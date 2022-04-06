import React from 'react';
import {View} from 'react-native';
import {Avatar} from '../../atoms/Avatar';
import {DescriptionCard} from '../DescriptionCard';
import {styles} from './styles';

interface IHeaderCard {
  country: string;
  cityName: string;
}
export const HeaderCard = ({country, cityName}: IHeaderCard) => {
  return (
    <View style={styles.container}>
      <Avatar />
      <View style={styles.descriptionContainer}>
        <DescriptionCard title={country} subtitle={cityName} />
      </View>
    </View>
  );
};
