import React from 'react';
import {View} from 'react-native';
import {CountryCardInformation} from '../../../interfaces/countryWheaterInfo.interface';
import {HeaderCard} from '../../molecules/HeaderCard';
import {WeekWeather} from '../../molecules/WeekWeather';
import {styles} from './styles';

export const CountryCard = ({
  cityName,
  country,
  weather,
}: CountryCardInformation) => {
  return (
    <View style={styles.container}>
      <HeaderCard cityName={cityName} country={country} />
      <View style={styles.weekContainer}>
        <WeekWeather weather={weather} />
      </View>
    </View>
  );
};
