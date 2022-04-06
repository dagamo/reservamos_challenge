import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {ICountry} from '../../../interfaces/country.model.interface';
import {CountrySearchedCard} from '../../molecules/CountrySearchedCard';
import {styles} from './styles';

interface ICountriesSearchedList {
  countriesData: ICountry[];
  onSelectCard: (name: string, active: boolean) => void;
}
export const CountriesSearchedList = ({
  countriesData,
  onSelectCard,
}: ICountriesSearchedList) => {
  const renderItem = ({item}: {item: ICountry}) => (
    <CountrySearchedCard
      countryName={item.city_name}
      onSelect={(active: boolean) => {
        onSelectCard(item.city_name, active);
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
