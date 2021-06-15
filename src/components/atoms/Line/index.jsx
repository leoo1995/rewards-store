import React from "react"
import styled from "styled-components"
const StyledLine = styled.div`
  background-color: ${({ color }) => color || "#d9d9d9"};
  width: ${({ vertical, size }) => (vertical ? "1px" : size)};
  height: ${({ horizontal, size }) => (horizontal ? "1px" : size)};
`
export const Line = ({ size, color, vertical, horizontal }) => {
  return <StyledLine {...{ size, color, vertical, horizontal }} />
}
