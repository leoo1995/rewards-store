import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 228px;
  height: 42px;
  background-color: white;
  color: #616161;
  border-radius: 50px;
  border: 1px solid white;
  box-sizing: border-box;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 18px;
  cursor: pointer;
  /* font-style: normal;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: -0.04px;
  text-align: center; */
`
export const RedeemButton = props => {
  return (
    <StyledButton {...props}>{props.children || "Redeem now"}</StyledButton>
  )
}
