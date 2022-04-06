import {ICountry} from '../../interfaces/country.model.interface';
import {ICountrySelected} from '../../interfaces/countrySelected.interface';
import {ISelectionCountries} from '../../interfaces/selectionCountries.interface';

export abstract class SelectionCountriesBehaviour
  implements ISelectionCountries
{
  public selectedCountries: ICountrySelected[];
  public countriesData: ICountry[];
  constructor(
    selectedCountries: ICountrySelected[],
    countriesData: ICountry[],
  ) {
    this.selectedCountries = selectedCountries;
    this.countriesData = countriesData;
  }
  public abstract onSearchCountry: (text: string) => void;
  public abstract onSelectCountry: (country: ICountry, active: boolean) => void;
}
