import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import Close from './../../../assets/icons/close.png';

export const CloseButton = () => {
  return (
    <TouchableOpacity>
      <Image source={Close} />
    </TouchableOpacity>
  );
};
