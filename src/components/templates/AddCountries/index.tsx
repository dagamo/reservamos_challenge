import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParamList} from '../../../types/stackList.type';
import {AddCountriesHeader} from '../../organisms/AddCountriesHeader';

export const AddCountriesTemplate = (
  props: NativeStackScreenProps<RootStackParamList>,
) => {
  return (
    <>
      <AddCountriesHeader {...props} />
    </>
  );
};
