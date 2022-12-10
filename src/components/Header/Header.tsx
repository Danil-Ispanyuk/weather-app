import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { Switch } from "../Switch/Switch";
import * as Styled from "./style";

interface IHeader {
  isActive: boolean,
  handleTheme: () => void;
  handleActiveButtonLink: (path: string) => string;
}

export const Header: FC<IHeader> = ({ isActive, handleTheme, handleActiveButtonLink }) => {
  return (
    <Styled.Container>
      <Styled.SwitchTheme>
        <Switch checked={isActive} onClick={handleTheme} />
      </Styled.SwitchTheme>

      <Styled.Buttons>
        <Link to="/home">
          <Button variant={handleActiveButtonLink("/home")} width="110px" height="45px">Home</Button>
        </Link>
        <Link to="/favourite">
          <Button variant={handleActiveButtonLink("/favourite")} width="110px" height="45px">Favourite</Button>
        </Link>
      </Styled.Buttons>
    </Styled.Container>
  );
};
