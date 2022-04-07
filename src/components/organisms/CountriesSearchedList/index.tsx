import React from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {ICountry} from '../../../interfaces/country.model.interface';
import {CountrySearchedCard} from '../../molecules/CountrySearchedCard';
import {styles} from './styles';
import {LisEmptySelection} from '../../atoms/ListEmptyCountriesSelection';

interface ICountriesSearchedList {
  countriesData: ICountry[];
  isActive: (name: string) => boolean;
  onSelectCard: (item: ICountry, active: boolean) => void;
}
export const CountriesSearchedList = ({
  countriesData,
  onSelectCard,
  isActive,
}: ICountriesSearchedList) => {
  const renderItem = ({item}: {item: ICountry}) => (
    <CountrySearchedCard
      countryName={item.city_name}
      isActive={isActive(item.city_name)}
      onSelect={(active: boolean) => {
        onSelectCard(item, active);
      }}
    />
  );
  const renderListEmpty = () => {
    return (
      <View style={styles.listEmpty}>
        <LisEmptySelection />
      </View>
    );
  };
  return (
    <FlatList
      style={styles.list}
      data={countriesData}
      renderItem={renderItem}
      ListEmptyComponent={renderListEmpty}
    />
  );
};
