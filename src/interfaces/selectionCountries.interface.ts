import {ICountry} from './country.model.interface';
import {ICountrySelected} from './countrySelected.interface';

export interface ISelectionCountries {
  onSearchCountry(text: string): void;
  onSelectCountry(item: ICountry, active: boolean): void;
  selectedCountries: ICountrySelected[];
  countriesData: ICountry[];
}
