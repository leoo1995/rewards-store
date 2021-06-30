import React from "react"
import styled from "styled-components"
import buyBlue from "../../../assets/icons/buy-blue.svg"
import buyWhite from "../../../assets/icons/buy-white.svg"
import logo from "../../../assets/aerolab-logo.svg"
import check from "../../../assets/icons/check.svg"
import close from "../../../assets/icons/close.svg"
import coinImg from "../../../assets/icons/coin.svg"
const StyledDiv = styled.div`
  background-color: transparent;
  width: ${({ size }) => size || "42px"};
  height: ${({ size }) => size || "42px"};
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
`

export const Icon = props => {
  const TypeIcon = () => {
    if (props.coin) return <img src={coinImg} alt="coin" />
    if (props.logo) return <img src={logo} alt="logo" />
    if (props.success) return <img src={check} alt="success" />
    if (props.reject) return <img src={close} alt="reject" />

    if (props.buy && props.white) return <img src={buyWhite} alt="buy" />
    return <img src={buyBlue} alt="buy" />
  }

  return (
    <StyledDiv {...props}>
      <TypeIcon />
    </StyledDiv>
  )
}
