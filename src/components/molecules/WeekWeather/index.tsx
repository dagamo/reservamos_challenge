import React from 'react';
import {ScrollView} from 'react-native';
import {CountryWheaterInformation} from '../../../interfaces/countryWheaterInfo.interface';
import {WeatherDescription} from '../WeatherDescription';
import {styles} from './styles';

interface IWeekWeather {
  weather: CountryWheaterInformation[];
}

export const WeekWeather = ({weather}: IWeekWeather) => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.weekContainer}>
      {weather.map(information => (
        <WeatherDescription
          day={information.name}
          iconURL={information.iconUrl}
          temperatureMin={information.min}
          temperatureMax={information.max}
        />
      ))}
    </ScrollView>
  );
};
