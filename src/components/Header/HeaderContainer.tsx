import React, { FC, useState } from 'react'
import { Header } from './Header'

enum TempVariant {
  dark = "dark",
  light = "light"
}

interface IHeaderContainer {
  theme: string,
  setTheme: (values: string) => void,
}

export const HeaderContainer:FC<IHeaderContainer> = ({theme, setTheme}) => {
  const [active, setActive] = useState(false)
  const handleTheme = () => {
    const isActive = theme === TempVariant.light;
    setTheme(isActive ? TempVariant.dark : TempVariant.light);
    setActive(isActive)
  }
  return (
    <Header isActive={active} handleTheme={handleTheme} />
  )
}
