import React, { FC, PropsWithChildren } from 'react'
import { HeaderContainer, SearchContainer } from '../../components'
import { IReactChildren } from '../../types/common.type'
import * as Styled from "./style"

interface IHomeContent {
  children: IReactChildren
}

interface IHomeForecast{
  children: IReactChildren,
}

interface ContentComposition {
  Content?: FC<IHomeContent>;
  Forecast?: FC<IHomeForecast>;
}

interface IHomeContainer{
  theme: string,
  setTheme: (value: string) => void,
  children: IReactChildren,
}



function HomeLayout ({children, theme, setTheme}: PropsWithChildren<IHomeContainer> & ContentComposition) {
  
  return (
    <Styled.Container>
        <HeaderContainer theme={theme} setTheme={setTheme} />
        <Styled.Search>
          <SearchContainer />
        </Styled.Search>
        {/* {children}      */}
    </Styled.Container>
  )
}

const Content: FC<IHomeContent> = ({children}) => {
  return(
  <Styled.Content>
    {children}
  </Styled.Content>)
}

const Forecast: FC<IHomeForecast> = ({children}) => {
  return (
  <Styled.Forecast>
    {children}
  </Styled.Forecast>)
}

HomeLayout.Content = Content
HomeLayout.Forecast = Forecast

export default HomeLayout