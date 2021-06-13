import styled from "styled-components"

export const StyledButton = styled.button`
  height: 50px;
  padding: 0 24px;
  border-radius: 20px;
  border: none;
  box-sizing: border-box;
  font-family: Source Sans Pro;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 48px;
  letter-spacing: -0.15px;
  text-align: left;
  cursor: pointer;
  text-decoration: none;
`
export const StyledButtonSecondary = styled(StyledButton)`
  background-color: #ededed;
  color: #a3a3a3;
`
export const StyledButtonPrimary = styled(StyledButton)`
  background-color: #0ad4fa;
  color: white;
`
