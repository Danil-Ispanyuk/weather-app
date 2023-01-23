import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DropDown, ContentLoader } from "../../components";
import { getError } from "../../services/services";
import { useGetCitiesQuery } from "../../store/autocomplete/autocomplete.api";
import { useGetLocationQuery } from "../../store/location/location.api";
import { IAutoComplete } from "../../types/autocomplete.type";
import { OptionType } from "../../types/common.type";
import { LocationValueType } from "../../types/location.type";
import { debounce } from "../../utils/debounce";
import { ForecastContainer } from "../Forecast/ForecastContainer";
import { initialCityValue } from "./helper";
import * as Styled from "./style";

export const Home = () => {
  const params: { id?: string | undefined } = useParams();
  const navigate = useNavigate();
  const {
    data: LocationData,
    isLoading: LocationLoader,
    isError: isLocationError,
    error: locationError,
  } = useGetLocationQuery(params.id, {
    skip: !params.id,
  });
  const [selectedCity, setSelectedCity] = useState<IAutoComplete | LocationValueType>(initialCityValue);
  const [searchValue, setSearchValue] = useState<string>("");
  const [cities, setCities] = useState<OptionType[]>([]);
  const {
    data: autoSearchData,
    isLoading: citiesLoader,
    isError: isSearchError,
    error: searchError, 
  } = useGetCitiesQuery(searchValue, {
    skip: searchValue.length < 2,
  });

  useEffect(() => {
    if (autoSearchData?.length) {
      setCities(
        autoSearchData?.map((city) => ({
          id: city.Key,
          name: `${city.LocalizedName}, ${city.AdministrativeArea.LocalizedName},  ${city.Country.LocalizedName}`,
        }))
      );
    } else {
      setCities([]);
    }
  }, [autoSearchData]);

  const onSelectCity = (cityId: string) => {
    const getSelectedCity = autoSearchData?.find((city) => city.Key === cityId);
    if (getSelectedCity) {
      navigate(`/home/${cityId}`);
      setSelectedCity(getSelectedCity);
    }
    setSearchValue("");
    setCities([]);
  };
  const handleChange = debounce((value: string) => setSearchValue(value), 500);

  return (
    <>
      <Styled.Search>
        <DropDown
          width={"350px"}
          value={searchValue}
          onChooseOption={onSelectCity}
          onChange={handleChange}
          options={cities}
          loader={citiesLoader}
        />
      </Styled.Search>
      {
        LocationLoader ? <ContentLoader />
        : isSearchError ? <Styled.ErrorMessage>
            {getError(searchError)}
          </Styled.ErrorMessage>
        : isLocationError ? <Styled.ErrorMessage>
            {getError(locationError)}
          </Styled.ErrorMessage>
        : !(LocationData || selectedCity.Key) && params.id ? <Styled.ErrorMessage>Sorry, but we can't find your city</Styled.ErrorMessage>
        : (LocationData || selectedCity.Key) && <ForecastContainer selectedCity={LocationData || selectedCity} />
      }
    </>
  );
};
