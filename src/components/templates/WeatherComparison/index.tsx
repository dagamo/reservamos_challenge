import React from 'react';
import {View, FlatList} from 'react-native';
import {ComparisonTemplateBehaviour} from '../../../behaviours/comparisonTemplate/comparisonTemplate';
import {CountriesSelected} from '../../organisms/CountriesSelected';
import {CountryCard} from '../../organisms/CountryCard';
import {Header} from '../../organisms/Header';
import {styles} from './styles';

export const WeatherComparison = (props: ComparisonTemplateBehaviour) => {
  const {header} = props;
  const renderHeader = () => {
    return (
      <>
        <Header {...header} />
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
