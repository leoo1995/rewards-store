import React from "react"
import styled from "styled-components"
const StyledSpan = styled.span`
  font-family: "Source Sans Pro", sans-serif;
  color: ${({ color }) => color};
  font-size: ${({ size }) => size};
  background-color: transparent;
  font-weight: 400;
  font-style: normal;
  margin: 0;
`
export const Label = props => {
  return <StyledSpan {...props}>{props.children}</StyledSpan>
}
