import React from 'react';
import {ScrollView, View} from 'react-native';
import {ICountrySelected} from '../../../interfaces/countrySelected.interface';
import {Chip} from '../../atoms/Chip';
import {styles} from './styles';

interface ICountriesSelected {
  countries: ICountrySelected[];
  onRemoveCountry: (name: string) => void;
}

export const CountriesSelected = ({
  countries,
  onRemoveCountry,
}: ICountriesSelected) => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      style={styles.container}>
      {countries.map(({city_name}, index) => (
        <View style={styles.chipContainer} key={index}>
          <Chip
            text={city_name}
            onPressClose={() => {
              onRemoveCountry(city_name);
            }}
          />
        </View>
      ))}
    </ScrollView>
  );
};
