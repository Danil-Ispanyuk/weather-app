import { FC } from "react";
import * as Styled from "./style";

interface ISwitch {
  checked: boolean;
  onClick: () => void;
}

export const Switch: FC<ISwitch> = ({ checked, onClick }) => (
  <Styled.Container>
    <Styled.Label
      onClick={onClick} checked={checked} />
  </Styled.Container>
);
