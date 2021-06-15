import styled from "styled-components"
export const StyledProductCard = styled.div`
  position: relative;
  padding: 12px;
  margin: 0;
  width: ${({ size }) => size || "276px"};
  height: ${({ size }) => size || "276px"};
  box-sizing: border-box;
  background-color: white;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 300ms ease, box-shadow 300ms ease;
  cursor: pointer;
  img {
    width: 100%;
  }
  &:hover {
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.1));
    box-shadow: 12px 12px 32px rgba(0, 0, 0, 0.4);
    transform: translateY(-12px);
  }
`
export const StyledProductCardHover = styled.div`
  background: linear-gradient(
    180deg,
    rgba(10, 212, 250, 0.86) 0%,
    rgba(37, 187, 241, 0.86) 100%
  );
  content: "";
  display: flex;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  div {
    display: flex;
    gap: 9px;
    align-items: center;
  }
`
export const FloatDiv = styled.div`
  z-index: 1;
  position: absolute;
  right: 12px;
  top: 12px;
`
export const StyledNeedAmount = styled.div`
  box-sizing: border-box;
  padding: 0 15px;
  height: 42px;
  background-color: rgba(97, 97, 97, 0.8);
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`
export const StyledInfo = styled.div`
  position: relative;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
`
