import { FC, useCallback, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { ButtonVariant } from '../Button/Button';
import { Header } from './Header'

enum TempVariant {
  dark = "dark",
  light = "light"
}

interface IHeaderContainer {
  theme?: string,
  setTheme: (values: string) => void,
}

export const HeaderContainer:FC<IHeaderContainer> = ({theme, setTheme}) => {
  const [active, setActive] = useState( JSON.parse(localStorage.getItem("theme") || "false"));
  const location = useLocation();
  const handleActiveButtonLink = useCallback((path: string) => {
    const isActive = !!location.pathname.split('/').find((locationPath) => locationPath === path)
    return isActive ? ButtonVariant.default : ButtonVariant.outline
  }, [location.pathname])
  const handleTheme = () => {
    const isActive = theme === TempVariant.light;
    setTheme(isActive ? TempVariant.dark : TempVariant.light);
    setActive(isActive)
    localStorage.setItem("theme", String(isActive));
  }
  return (
    <Header handleActiveButtonLink={handleActiveButtonLink} isActive={active} handleTheme={handleTheme} />
  )
}
