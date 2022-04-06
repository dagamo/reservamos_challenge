import React from 'react';
import {createContext, useState} from 'react';
import {ICountrySelected} from '../interfaces/countrySelected.interface';
import {CountryCardInformation} from '../interfaces/countryWheaterInfo.interface';

interface IWeatherComparisonContext {
  countriesSelected: ICountrySelected[];
  countriesComparison: CountryCardInformation[];
  setCountriesComparison: React.Dispatch<
    React.SetStateAction<CountryCardInformation[]>
  >;
  setCountriesSelected: React.Dispatch<
    React.SetStateAction<ICountrySelected[]>
  >;
}

export const WheaterComparisonContext =
  createContext<IWeatherComparisonContext>({
    countriesSelected: [],
    countriesComparison: [],
    setCountriesSelected: () => {},
    setCountriesComparison: () => {},
  });

export const WheaterComparisonProvider = ({
  children,
}: JSX.ElementChildrenAttribute) => {
  const [countriesSelected, setCountriesSelected] = useState<
    ICountrySelected[]
  >([]);
  const [countriesComparison, setCountriesComparison] = useState<
    CountryCardInformation[]
  >([]);
  return (
    <WheaterComparisonContext.Provider
      value={{
        countriesSelected,
        countriesComparison,
        setCountriesComparison,
        setCountriesSelected,
      }}>
      {children}
    </WheaterComparisonContext.Provider>
  );
};
