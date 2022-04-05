import React from 'react';
import {Image, View} from 'react-native';
import {SmallText} from '../../atoms/SmallText';
import {TitleCard} from '../../atoms/TitleCard';
import WeatherIcon from './../../../assets/icons/weather.png';
import {styles} from './styles';

interface IWeatherDescription {
  day: string;
  temperatureMin: number;
  temperatureMax: number;
}
export const WeatherDescription = (props: IWeatherDescription) => {
  const {day, temperatureMax, temperatureMin} = props;
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TitleCard text={day} />
      </View>
      <View style={styles.imageContainer}>
        <Image source={WeatherIcon} />
      </View>
      <SmallText text={`Min ${temperatureMin}ºC`} />
      <SmallText text={`Max ${temperatureMax}ºC`} />
    </View>
  );
};
