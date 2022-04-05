import React from 'react';
import {ScrollView} from 'react-native';
import {WeatherDescription} from '../WeatherDescription';
import {styles} from './styles';

export const WeekWeather = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.weekContainer}>
      <WeatherDescription day="Lunes" temperatureMin={1} temperatureMax={3} />
      <WeatherDescription day="Martes" temperatureMin={1} temperatureMax={3} />
      <WeatherDescription
        day="Miercoles"
        temperatureMin={1}
        temperatureMax={3}
      />
      <WeatherDescription day="Jueves" temperatureMin={1} temperatureMax={3} />
      <WeatherDescription day="Viernes" temperatureMin={1} temperatureMax={3} />
      <WeatherDescription day="Sabado" temperatureMin={1} temperatureMax={3} />
      <WeatherDescription day="Domingo" temperatureMin={1} temperatureMax={3} />
    </ScrollView>
  );
};
