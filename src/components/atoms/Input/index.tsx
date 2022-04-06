import React from 'react';
import {TextInput, TextInputProps} from 'react-native';
import {styles} from './styles';

interface IInputComponent extends TextInputProps {
  placeholder: string;
}

export const InputComponent = ({placeholder, ...rest}: IInputComponent) => {
  return <TextInput style={styles.input} placeholder={placeholder} {...rest} />;
};
