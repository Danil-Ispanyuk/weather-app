import { FC } from "react"
import { useNavigate } from "react-router-dom"
import { ForecastWidget } from "../../components"
import { IAutoComplete } from "../../types/autocomplete.type"
import * as Styled from "./style"
interface IProps {
  favourites: IAutoComplete[]
}

export const Favourite: FC<IProps> = ({
  favourites
}) => {
  const navigate = useNavigate();
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
