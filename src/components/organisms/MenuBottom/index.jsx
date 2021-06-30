import React, { useContext } from "react"
import { Pagination } from "../../molecules/Pagination"
import { ArrowButton } from "../../atoms/ArrowButton"
import styled from "styled-components"
import { Line } from "../../atoms/Line"
import { PaginationContext } from "../../../context/PaginationContext"
import { GlobalStates } from "../../../context/GlobalStates"

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
  const { state } = useContext(GlobalStates)
  const { products } = state
  const { next, prev, currentPage, maxPage } = useContext(PaginationContext)

  return (
    <StyledMenuBottom>
      <Pagination
        numberOfProductsSeen={currentPage * 16}
        numberOfProducts={products.length}
      />
      <StyledNavigation>
        {currentPage === maxPage ? (
          <ArrowButton type="left" onClick={prev} />
        ) : undefined}
        {currentPage === 1 ? (
          <ArrowButton type="right" onClick={next} />
        ) : undefined}
      </StyledNavigation>
      <StyledLine size="100%" horizontal />
    </StyledMenuBottom>
  )
}
