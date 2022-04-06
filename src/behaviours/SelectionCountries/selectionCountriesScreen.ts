import {SelectionCountriesBehaviour} from './selectionCountries';
import axios from 'axios';
import {ICountry} from '../../interfaces/country.model.interface';
import React from 'react';
import {ICountrySelected} from '../../interfaces/countrySelected.interface';
import debounce from 'lodash.debounce';
import {CountryCardInformation} from '../../interfaces/countryWheaterInfo.interface';

export class SelectionCountriesTemplateBehaviour extends SelectionCountriesBehaviour {
  private setCountriesData: React.Dispatch<React.SetStateAction<ICountry[]>>;
  private setCountrySelected: React.Dispatch<
    React.SetStateAction<ICountrySelected[]>
  >;
  private setCountriesComparison: React.Dispatch<
    React.SetStateAction<CountryCardInformation[]>
  >;
  constructor(
    selectedCountries: ICountrySelected[],
    countriesData: ICountry[],
    setCountriesData: React.Dispatch<React.SetStateAction<ICountry[]>>,
    setCountrySelected: React.Dispatch<
      React.SetStateAction<ICountrySelected[]>
    >,
    setCountriesComparison: React.Dispatch<
      React.SetStateAction<CountryCardInformation[]>
    >,
  ) {
    super(selectedCountries, countriesData);
    this.setCountriesData = setCountriesData;
    this.setCountrySelected = setCountrySelected;
    this.setCountriesComparison = setCountriesComparison;
  }
  public onSearchCountry = async (text: string) => {
    const debounceFetch = debounce(async () => {
      try {
        const result = await axios.get(
          `https://search.reservamos.mx/api/v2/places?q=${text}`,
        );
        this.setCountriesData(result.data);
        console.log('Result search', result.data);
      } catch (err) {
        console.error(err);
      }
    }, 1000);

    debounceFetch();
  };
  /**
   * TODO: It needs refactor and separe in differents functions
   */
  onSelectCountry = async (country: ICountry, active: boolean) => {
    const isExisting = this.selectedCountries.some(
      item => item.city_name === country.city_name,
    );
    if (active && isExisting) {
      return;
    }
    if (active && !isExisting) {
      try {
        const result = await axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${country.lat}&exclude=minutely,hourly&lon=${country.long}&appid=a5a47c18197737e8eeca634cd6acb581`,
        );
        this.setCountriesComparison((data: CountryCardInformation[]) => {
          return [
            ...data,
            {
              cityName: country.city_name,
              country: 'Mexico',
              weather: result.data.daily.map((daily: any, index: number) => ({
                name: index === 0 ? 'Hoy' : `Dia ${index}`,
                iconUrl: `http://openweathermap.org/img/w/${daily.weather[0].icon}.png`,
                min: daily.temp.min,
                max: daily.temp.max,
              })),
            },
          ];
        });
        this.setCountrySelected((data: ICountrySelected[]) => {
          return [...data, {city_name: country.city_name}];
        });
      } catch (err) {
        console.log('result weather', err);
      }
    }
  };
}
