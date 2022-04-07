import React from 'react';
import {View, FlatList, Image} from 'react-native';
import {ComparisonTemplateBehaviour} from '../../../behaviours/comparisonTemplate/comparisonTemplate';
import {CountryCardInformation} from '../../../interfaces/countryWheaterInfo.interface';
import {CountriesSelected} from '../../organisms/CountriesSelected';
import {CountryCard} from '../../organisms/CountryCard';
import {Header} from '../../organisms/Header';
import {styles} from './styles';
import EmptyListImage from './../../../assets/icons/empty1.png';

export const WeatherComparison = (props: ComparisonTemplateBehaviour) => {
  const {
    header,
    countriesComparison,
    countriesSelected,
    onRemoveCountrySelected,
  } = props;
  const renderHeader = () => {
    return (
      <>
        <Header {...header} />
        <View style={styles.countriesContainer}>
          <CountriesSelected
            countries={countriesSelected}
            onRemoveCountry={onRemoveCountrySelected}
          />
        </View>
      </>
    );
  };
  const renderCard = ({item}: {item: CountryCardInformation}) => {
    return (
      <View style={styles.countryCardContainer}>
        <CountryCard {...item} />
      </View>
    );
  };
  const renderListEmpty = () => {
    return (
      <View style={styles.emptyList}>
        <Image source={EmptyListImage} />
      </View>
    );
  };
  return (
    <>
      <FlatList
        ListHeaderComponent={renderHeader}
        renderItem={renderCard}
        data={countriesComparison}
        ListEmptyComponent={renderListEmpty}
      />
    </>
  );
};
