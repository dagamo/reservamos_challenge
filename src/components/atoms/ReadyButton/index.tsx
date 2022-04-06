import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NormalText} from '../NormalText';

interface IReadyButton {
  onPressReady: () => void;
}
export const ReadyButton = ({onPressReady}: IReadyButton) => {
  return (
    <TouchableOpacity onPress={onPressReady}>
      <NormalText text="Listo" />
    </TouchableOpacity>
  );
};
