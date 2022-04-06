export interface CountryWheaterInformation {
  name: string;
  iconUrl: string;
  min: number;
  max: number;
}

export interface CountryCardInformation {
  cityName: string;
  country: string;
  weather: CountryWheaterInformation[];
}
