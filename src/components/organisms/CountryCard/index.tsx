import React from 'react';
import {View} from 'react-native';
import {HeaderCard} from '../../molecules/HeaderCard';
import {WeekWeather} from '../../molecules/WeekWeather';
import {styles} from './styles';

export const CountryCard = () => {
  return (
    <View style={styles.container}>
      <HeaderCard />
      <View style={styles.weekContainer}>
        <WeekWeather />
      </View>
    </View>
  );
};
