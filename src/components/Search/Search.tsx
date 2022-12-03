import React, { FC } from 'react'
import { Button } from '../Button/Button'
import * as Styled from "./style"

interface IProps {
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
}

export const Search: FC<IProps> = ({onChange}) => {
  return (
    <Styled.Container>
        <Styled.Input onChange={onChange} placeholder='Search...' />
        <Button width='40px' height='40px'>
            <Styled.LoopIcon />
        </Button>
    </Styled.Container>
  )
}
