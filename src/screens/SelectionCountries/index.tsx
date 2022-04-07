import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useContext, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SelectionCountriesTemplate} from './../../components/templates/SelectionCountries/index';
import {RootStackParamList} from '../../types/stackList.type';
import {ICountry} from '../../interfaces/country.model.interface';
import {SelectionCountriesTemplateBehaviour} from '../../behaviours/SelectionCountries/selectionCountriesScreen';
import {WheaterComparisonContext} from '../../providers/WeatherProvider';

export const SelectionCountriesScreen = (
  props: NativeStackScreenProps<RootStackParamList>,
) => {
  const [countriesData, setCountriesData] = useState<ICountry[]>([]);
  const {setCountriesSelected, countriesSelected, setCountriesComparison} =
    useContext(WheaterComparisonContext);

  const selectionCountriesTemplateProps =
    new SelectionCountriesTemplateBehaviour(
      countriesSelected,
      countriesData,
      setCountriesData,
      setCountriesSelected,
      setCountriesComparison,
    );
  return (
    <>
      <SafeAreaView>
        <SelectionCountriesTemplate
          {...selectionCountriesTemplateProps}
          navigation={props}
        />
      </SafeAreaView>
    </>
  );
};
