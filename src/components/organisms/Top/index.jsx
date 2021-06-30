import React from "react"
import { Icon } from "../../atoms/Icon"
import { Profile } from "../../molecules/Profile"
import styled from "styled-components"
export const StyledTop = styled.div`
  display: flex;
  height: 80px;
  max-width: 1440px;
  width: 100%;
  padding: 0 42px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`
export const Top = ({ user, points }) => {
  return (
    <StyledTop>
      <Icon logo />
      <Profile {...{ user, points }} />
    </StyledTop>
  )
}
