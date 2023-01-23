import { IAutoComplete } from "../../types/autocomplete.type";
import { Favourite } from "./Favourite"

export const FavouriteContainer = () => {

  const favourites: IAutoComplete[] = JSON.parse(
    localStorage.getItem("favourites") || "{}"
  );

  return (
    <Favourite
      favourites={favourites}
    />
  )
}
