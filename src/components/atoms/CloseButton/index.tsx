import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import Close from './../../../assets/icons/close.png';
import {styles} from './styles';

interface ICloseButton {
  onPressClose: () => void;
}
export const CloseButton = ({onPressClose}: ICloseButton) => {
  return (
    <TouchableOpacity onPress={onPressClose} style={styles.close}>
      <Image source={Close} />
    </TouchableOpacity>
  );
};
