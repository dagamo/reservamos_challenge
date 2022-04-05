import React from 'react';
import {View, FlatList} from 'react-native';
import {CountriesSelected} from '../../organisms/CountriesSelected';
import {CountryCard} from '../../organisms/CountryCard';
import {Header} from '../../organisms/Header';
import {styles} from './styles';

export const WeatherComparison = () => {
  const renderHeader = () => {
    return (
      <>
        <Header />
        <View style={styles.countriesContainer}>
          <CountriesSelected />
        </View>
      </>
    );
  };
  const renderCard = () => {
    return (
      <View style={styles.countryCardContainer}>
        <CountryCard />
      </View>
    );
  };
  return (
    <>
      <FlatList
        ListHeaderComponent={renderHeader}
        renderItem={renderCard}
        data={[{}, {}]}
      />
    </>
  );
};
