import styled from "styled-components"

export const StyledButton = styled.button`
  min-height: 50px;
  padding: 12px 24px;
  border-radius: 20px;
  border: none;
  box-sizing: border-box;
  font-family: "Source Sans Pro", source-sans-pro;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    /* font-size: 18px; */
  }
`
export const StyledButtonSecondary = styled(StyledButton)`
  background-color: #ededed;
  color: #a3a3a3;
`
export const StyledButtonPrimary = styled(StyledButton)`
  background-color: #0ad4fa;
  color: white;
`
