import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import {HelperBarOptions} from '../../../behaviours/headerBarOptions/HelperBarOptions';
import {RootStackParamList} from '../../../types/stackList.type';
import {InputComponent} from '../../atoms/Input';
import {Title} from '../../atoms/Title';
import {HeaderBarOptions} from '../../molecules/HeadeBarOptions';
import {styles} from './styles';

interface IAddCountriesHeader {
  navigation: NativeStackScreenProps<RootStackParamList>;
  onSearch: (text: string) => void;
}
export const AddCountriesHeader = (props: IAddCountriesHeader) => {
  const {
    navigation: {navigation},
    onSearch,
  } = props;
  const headerBarControls = new HelperBarOptions(navigation);
  return (
    <View style={styles.container}>
      <HeaderBarOptions {...headerBarControls} />
      <Title text="Busca y compara tu destino!" />
      <InputComponent
        placeholder="Introduce tu destino"
        onChangeText={onSearch}
      />
    </View>
  );
};
