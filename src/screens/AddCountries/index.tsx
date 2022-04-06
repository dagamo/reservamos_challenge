import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AddCountriesTemplate} from '../../components/templates/AddCountries';
import {RootStackParamList} from '../../types/stackList.type';

export const AddCountriesScreen = (
  props: NativeStackScreenProps<RootStackParamList>,
) => {
  return (
    <SafeAreaView>
      <AddCountriesTemplate {...props} />
    </SafeAreaView>
  );
};
