import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NormalText} from '../NormalText';

interface IWordCloseButton {
  onPressClose: () => void;
}
export const WordCloseButton = ({onPressClose}: IWordCloseButton) => {
  return (
    <TouchableOpacity onPress={onPressClose}>
      <NormalText text="Cerrar" />
    </TouchableOpacity>
  );
};
