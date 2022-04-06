import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {ICountry} from '../../../interfaces/country.model.interface';
import {CountrySearchedCard} from '../../molecules/CountrySearchedCard';
import {styles} from './styles';

interface ICountriesSearchedList {
  countriesData: ICountry[];
  onSelectCard: (item: ICountry, active: boolean) => void;
}
export const CountriesSearchedList = ({
  countriesData,
  onSelectCard,
}: ICountriesSearchedList) => {
  const renderItem = ({item}: {item: ICountry}) => (
    <CountrySearchedCard
      countryName={item.city_name}
      onSelect={(active: boolean) => {
        onSelectCard(item, active);
      }}
    />
  );
  return (
    <FlatList
      style={styles.list}
      data={countriesData}
      renderItem={renderItem}
    />
  );
};
