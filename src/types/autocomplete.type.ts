export interface Country {
  ID: string;
  LocalizedName: string;
}

export interface AdministrativeArea {
  ID: string;
  LocalizedName: string;
}

export interface IAutoComplete {
  Version: number | null;
  Key: string;
  Type: string;
  Rank: number | null;
  LocalizedName: string;
  Country: Country;
  AdministrativeArea: AdministrativeArea;
}