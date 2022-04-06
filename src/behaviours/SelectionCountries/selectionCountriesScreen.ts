import {SelectionCountriesBehaviour} from './selectionCountries';
import axios from 'axios';
import {ICountry} from '../../interfaces/country.model.interface';
import React from 'react';
import {ICountrySelected} from '../../interfaces/countrySelected.interface';
import debounce from 'lodash.debounce';

export class SelectionCountriesTemplateBehaviour extends SelectionCountriesBehaviour {
  private setCountriesData: React.Dispatch<React.SetStateAction<ICountry[]>>;
  private setCountrySelected: React.Dispatch<
    React.SetStateAction<ICountrySelected[]>
  >;
  constructor(
    selectedCountries: ICountrySelected[],
    countriesData: ICountry[],
    setCountriesData: React.Dispatch<React.SetStateAction<ICountry[]>>,
    setCountrySelected: React.Dispatch<
      React.SetStateAction<ICountrySelected[]>
    >,
  ) {
    super(selectedCountries, countriesData);
    this.setCountriesData = setCountriesData;
    this.setCountrySelected = setCountrySelected;
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

  onSelectCountry = (name: string, active: boolean) => {
    this.setCountrySelected((data: ICountrySelected[]) => {
      if (!data.some(city => city.city_name === name) && active) {
        return [...data, {city_name: name}];
      }
      if (data.some(city => city.city_name === name) && !active) {
        return data.filter(city => city.city_name !== name);
      }
      return data;
    });
  };
}
