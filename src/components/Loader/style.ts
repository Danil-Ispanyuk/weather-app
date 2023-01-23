import styled from "styled-components";

export const Wrapper = styled.div<{
  styles?: {
    width?: string;
    margin?: string;
  };
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({styles}) => styles?.width || "100%"};
  height: 100%;
  ${({styles}) => styles?.margin ? `margin: ${styles?.margin};` : null}
`;

export const LoaderContainer = styled.div`
  position: fixed;
  min-height: 100vh;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoaderContent = styled.div`
  max-width: 150px;
  position: absolute;
`;

export const LoaderImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
