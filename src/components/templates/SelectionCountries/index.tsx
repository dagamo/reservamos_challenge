import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import {SelectionCountriesBehaviour} from '../../../behaviours/SelectionCountries/selectionCountries';
import {RootStackParamList} from '../../../types/stackList.type';
import {AddCountriesHeader} from '../../organisms/AddCountriesHeader';
import {CountriesSearchedList} from '../../organisms/CountriesSearchedList';
import {CountriesSelected} from '../../organisms/CountriesSelected';
import {styles} from './styles';

interface ISelectionCountriesTemplate extends SelectionCountriesBehaviour {
  navigation: NativeStackScreenProps<RootStackParamList>;
}
export const SelectionCountriesTemplate = (
  props: ISelectionCountriesTemplate,
) => {
  const {
    navigation,
    onSearchCountry,
    countriesData,
    selectedCountries,
    onSelectCountry,
  } = props;
  return (
    <>
      <AddCountriesHeader navigation={navigation} onSearch={onSearchCountry} />
      <View style={styles.countriesSelectedContainer}>
        <CountriesSelected countries={selectedCountries} />
      </View>
      <View style={styles.listContainer}>
        <CountriesSearchedList
          countriesData={countriesData}
          onSelectCard={onSelectCountry}
        />
      </View>
    </>
  );
};
