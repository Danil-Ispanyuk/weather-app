import * as Styled from "./style"
import LoaderGif from "../../assets/loader/loader.gif"

export const ContentLoader = () => {
  return (
    <Styled.LoaderContainer>
      <Styled.LoaderContent>
          <Styled.LoaderImg src={LoaderGif} />
      </Styled.LoaderContent>
    </Styled.LoaderContainer>
  )
}
