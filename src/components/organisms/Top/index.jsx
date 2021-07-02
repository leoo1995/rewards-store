import React from "react"
import { Link } from "react-router-dom"
import { Icon } from "../../atoms/Icon"
import { Profile } from "../../molecules/Profile"
import styled from "styled-components"
import { Label } from "../../atoms/Label"
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
  gap: 20px;
`
const StyledLink = styled(Link)`
  justify-self: flex-end;
  text-decoration: none;
`
export const Top = ({ user, points }) => {
  return (
    <StyledTop>
      <Link to="/">
        <Icon logo />
      </Link>
      <StyledLink to="/history">
        <Label size="24px" color="#616161">
          History
        </Label>
      </StyledLink>
      <Profile {...{ user, points }} />
    </StyledTop>
  )
}
