import React, { FC } from "react";
import * as Styled from "./style";

export enum ButtonVariant {
  default = "default",
  outline = "outline",
}

interface IButton {
  children: React.ReactNode;
  onClick?: () => void;
  active?: () => boolean;
  variant?: string | ButtonVariant;
  width?: string;
  height?: string;
}

export const Button: FC<IButton> = ({
  children,
  onClick,
  variant = ButtonVariant.outline,
  width = "auto",
  height = "auto",
}) => {
  return (
    <Styled.Container width={width} height={height}>
      <Styled.Button onClick={onClick} variant={variant}>
        {children}
      </Styled.Button>
    </Styled.Container>
  );
};
