import React from 'react';
import {View} from 'react-native';
import {CountriesList} from '../../components/organisms/CountriesList';
import {CountriesSelected} from '../../components/organisms/CountriesSelected';
import {Header} from '../../components/organisms/Header';
import {styles} from './styles';

export const WeatherComparison = () => {
  return (
    <>
      <View>
        <Header />
      </View>
      <View style={styles.countriesContainer}>
        <CountriesSelected />
      </View>
      <View>
        <CountriesList />
      </View>
    </>
  );
};
