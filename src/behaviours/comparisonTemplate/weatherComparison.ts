import React from 'react';
import {ICountrySelected} from '../../interfaces/countrySelected.interface';
import {CountryCardInformation} from '../../interfaces/countryWheaterInfo.interface';
import {HeaderBehaviour} from '../header/header';
import {ComparisonTemplateBehaviour} from './comparisonTemplate';

export class WeatherComparisonBehaviour extends ComparisonTemplateBehaviour {
  public header: HeaderBehaviour;
  public countriesSelected: ICountrySelected[];
  public countriesComparison: CountryCardInformation[];
  private setCountriesSelected: React.Dispatch<
    React.SetStateAction<ICountrySelected[]>
  >;
  private setCountriesComparison: React.Dispatch<
    React.SetStateAction<CountryCardInformation[]>
  >;
  constructor(
    header: HeaderBehaviour,
    countriesSelected: ICountrySelected[],
    countriesComparison: CountryCardInformation[],
    setCountriesSelected: React.Dispatch<
      React.SetStateAction<ICountrySelected[]>
    >,
    setCountriesComparison: React.Dispatch<
      React.SetStateAction<CountryCardInformation[]>
    >,
  ) {
    super();
    this.header = header;
    this.countriesSelected = countriesSelected;
    this.countriesComparison = countriesComparison;
    this.setCountriesSelected = setCountriesSelected;
    this.setCountriesComparison = setCountriesComparison;
  }
  public onRemoveCountrySelected = (name: string) => {
    this.setCountriesSelected((countries: ICountrySelected[]) => {
      return countries.filter(country => country.city_name !== name);
    });
    this.setCountriesComparison(countries => {
      return countries.filter(country => country.cityName !== name);
    });
  };
}
