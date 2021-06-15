import React from "react"
import styled from "styled-components"
import coinImg from "../../../assets/icons/coin.svg"
const StyledDiv = styled.div`
  width: ${({ size }) => size || "24px"};
  height: ${({ size }) => size || "24px"};
  margin: 0;
  padding: 0;
  img {
    width: 100%;
    height: 100%;
  }
`
export const Coin = props => {
  return (
    <StyledDiv {...props}>
      <img src={coinImg} alt="coin" />
    </StyledDiv>
  )
}
