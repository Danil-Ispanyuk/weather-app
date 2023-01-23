import { useNavigate } from "react-router-dom"
import { ForecastWidget } from "../../components"
import { IAutoComplete } from "../../types/autocomplete.type"
import * as Styled from "./style"

export const Favourite = () => {
  const navigate = useNavigate();
  const favourites: IAutoComplete[] = JSON.parse(
    localStorage.getItem("favourites") || "{}"
  );
  return (
    <Styled.Container>
      {!Array.isArray(favourites) ? <Styled.Content>
        Add your favorite cities at "Home" page
      </Styled.Content> : favourites?.map((forecast, index) => (
          <ForecastWidget
            onClick={() => navigate(`/home/${forecast.Key}`)}
            isFavourite={true}
            key={index}
            title={forecast.LocalizedName}
            details={forecast.Key}
          />
        ))}
    </Styled.Container>
  )
}
