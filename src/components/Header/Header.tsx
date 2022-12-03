import React, { FC } from "react";
import { Button, ButtonVariant } from "../Button/Button";
import { Switch } from "../Switch/Switch";
import * as Styled from "./style";

interface IHeader {
  isActive: boolean,
  handleTheme: () => void;
}

export const Header: FC<IHeader> = ({ isActive, handleTheme }) => {
  return (
    <Styled.Container>
      <Styled.SwitchTheme>
        <Switch checked={isActive} onClick={handleTheme} />
      </Styled.SwitchTheme>

      <Styled.Buttons>
        <Button width="110px" height="45px">Home</Button>
        <Button variant={ButtonVariant.outline} width="110px" height="45px">Favourite</Button>
      </Styled.Buttons>
    </Styled.Container>
  );
};
