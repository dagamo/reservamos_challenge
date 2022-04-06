import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SelectionCountriesTemplate} from './../../components/templates/SelectionCountries/index';
import {RootStackParamList} from '../../types/stackList.type';
import {ICountry} from '../../interfaces/country.model.interface';
import {ICountrySelected} from '../../interfaces/countrySelected.interface';
import {SelectionCountriesTemplateBehaviour} from '../../behaviours/SelectionCountries/selectionCountriesScreen';

export const SelectionCountriesScreen = (
  props: NativeStackScreenProps<RootStackParamList>,
) => {
  const [countriesData, setCountriesData] = useState<ICountry[]>([]);
  const [countriesSelected, setCountriesSelected] = useState<
    ICountrySelected[]
  >([]);
  const selectionCountriesTemplateProps =
    new SelectionCountriesTemplateBehaviour(
      countriesSelected,
      countriesData,
      setCountriesData,
      setCountriesSelected,
    );
  return (
    <SafeAreaView>
      <SelectionCountriesTemplate
        {...selectionCountriesTemplateProps}
        navigation={props}
      />
    </SafeAreaView>
  );
};
