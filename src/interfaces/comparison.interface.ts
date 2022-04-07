import {HeaderBehaviour} from '../behaviours/header/header';
import {ICountrySelected} from './countrySelected.interface';
import {CountryCardInformation} from './countryWheaterInfo.interface';

export interface IComparisonTemplate {
  header: HeaderBehaviour;
  countriesSelected: ICountrySelected[];
  countriesComparison: CountryCardInformation[];
  onRemoveCountrySelected(name: string): void;
}
