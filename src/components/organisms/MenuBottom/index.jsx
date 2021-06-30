import React from "react"
import { Pagination } from "../../molecules/Pagination"
import { ArrowButton } from "../../atoms/ArrowButton"
import styled from "styled-components"
import { Line } from "../../atoms/Line"

const StyledMenuBottom = styled.div`
  max-width: 1176px;
  width: 100%;
  display: flex;
  min-height: 49px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  flex-wrap: wrap;
  position: relative;
`
const StyledLine = styled(Line)`
  position: absolute;
  bottom: 0;
`
const StyledNavigation = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  height: 100%;
  /* max-height: 50px; */
  max-width: 108px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  justify-self: space-between;
  align-self: center;
`
export const MenuBottom = () => {
  return (
    <StyledMenuBottom>
      <Pagination numberOfProductsSeen={16} numberOfProducts={32}></Pagination>
      <StyledNavigation>
        <ArrowButton type="left" />
        <ArrowButton ype="right" />
      </StyledNavigation>
      <StyledLine size="100%" horizontal />
    </StyledMenuBottom>
  )
}
