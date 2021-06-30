import React, { useContext } from "react"
import { ProductCard } from "../../molecules/ProductCard"
import styled from "styled-components"
import { PaginationContext } from "../../../context/PaginationContext"
export const StyledProducts = styled.section`
  min-height: 1200px;
  max-width: 1176px;
  width: 100%;
  padding: 0;
  margin-top: 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  gap: 24px 0;
  flex-wrap: wrap;

  @media (max-width: 800px) {
    justify-content: space-evenly;
  }
`

export const Products = () => {
  const { currentProducts } = useContext(PaginationContext)

  return (
    <StyledProducts>
      {currentProducts()?.map(product => (
        <ProductCard key={product._id} {...product} />
      ))}
    </StyledProducts>
  )
}
