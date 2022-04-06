import React from 'react';
import {ScrollView, View} from 'react-native';
import {ICountrySelected} from '../../../interfaces/countrySelected.interface';
import {Chip} from '../../atoms/Chip';
import {styles} from './styles';

interface ICountriesSelected {
  countries: ICountrySelected[];
}

export const CountriesSelected = ({countries}: ICountriesSelected) => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      style={styles.container}>
      {countries.map(({city_name}) => (
        <View style={styles.chipContainer}>
          <Chip text={city_name} />
        </View>
      ))}
    </ScrollView>
  );
};
