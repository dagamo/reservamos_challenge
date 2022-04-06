import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {HelperBarOptions} from '../../../behaviours/headerBarOptions/HelperBarOptions';
import {RootStackParamList} from '../../../types/stackList.type';
import {InputComponent} from '../../atoms/Input';
import {Title} from '../../atoms/Title';
import {HeaderBarOptions} from '../../molecules/HeadeBarOptions';

export const AddCountriesHeader = (
  props: NativeStackScreenProps<RootStackParamList>,
) => {
  const headerBarControls = new HelperBarOptions(props.navigation);
  return (
    <>
      <HeaderBarOptions {...headerBarControls} />
      <Title text="Busca y compara tu destino!" />
      <InputComponent placeholder="Introduce tu destino" />
    </>
  );
};
