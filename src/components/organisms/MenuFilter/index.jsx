import React, { useState, useContext } from "react"
//components
import { Pagination } from "../../molecules/Pagination"
import { Label } from "../../atoms/Label"
import { Line } from "../../atoms/Line"
import { Button } from "../../atoms/Button"
import { ArrowButton } from "../../atoms/ArrowButton"
import { StyledMenuFilter, StyledNavigation, StyledLine } from "./styles"
//contexts
import { GlobalStates } from "../../../context/GlobalStates"
import { PaginationContext } from "../../../context/PaginationContext"

const MenuFilter = () => {
  const { state, setState } = useContext(GlobalStates)
  const { next, prev, currentPage, maxPage } = useContext(PaginationContext)
  const { products, user } = state
  const { redeemHistory } = user
  const sortByMostRecent = () => {
    const redeemHistoryDescendent = redeemHistory?.sort((a, b) => {
      const dateA = new Date(a.createDate)
      const dateB = new Date(b.createDate)
      return dateB.getTime() - dateA.getTime()
    })
    const redeemHistoryDescendentFiltered = redeemHistoryDescendent.filter(
      (item, index, self) => {
        const idsHistory = self.map(s => s.productId)
        return index === idsHistory.indexOf(item.productId)
      }
    )
    const filterProductsById = (productsHistory, productsList) => {
      return productsHistory.map(productInHistory =>
        productsList.find(
          productInList => productInList._id === productInHistory.productId
        )
      )
    }
    const recentProducts = [
      ...filterProductsById(redeemHistoryDescendentFiltered, products),
      ...products
    ].filter((product, index, self) => index === self.indexOf(product))
    setState({ ...state, products: recentProducts })
  }
  const sortByLowestPrice = () => {
    products.sort((productA, productB) => productA.cost - productB.cost)
    setState({ ...state, products })
  }
  const sortByHighestPrice = () => {
    products.sort((productA, productB) => productB.cost - productA.cost)
    setState({ ...state, products })
  }
  const [filter, setFilter] = useState({
    mostRecent: false,
    lowestPrice: false,
    highestPrice: false
  })

  return (
    <StyledMenuFilter>
      <div>
        <Pagination
          numberOfProductsSeen={currentPage * 16}
          numberOfProducts={products.length}
        />
        <Line vertical size="100%" />{" "}
        <Label size="24px" color="#a3a3a3">
          Sort by:
        </Label>
        <Button
          type={filter.mostRecent ? "primary" : "secondary"}
          onClick={() => {
            setFilter({
              mostRecent: true,
              lowestPrice: false,
              highestPrice: false
            })
            sortByMostRecent()
          }}
        >
          Most recent
        </Button>
        <Button
          type={filter.lowestPrice ? "primary" : "secondary"}
          onClick={() => {
            setFilter({
              mostRecent: false,
              lowestPrice: true,
              highestPrice: false
            })
            sortByLowestPrice()
          }}
        >
          Lowest price
        </Button>
        <Button
          type={filter.highestPrice ? "primary" : "secondary"}
          onClick={() => {
            setFilter({
              mostRecent: false,
              lowestPrice: false,
              highestPrice: true
            })
            sortByHighestPrice()
          }}
        >
          Highest price
        </Button>
      </div>
      <StyledNavigation>
        {currentPage === maxPage ? (
          <ArrowButton type="left" onClick={prev} />
        ) : undefined}
        {currentPage === 1 ? (
          <ArrowButton type="right" onClick={next} />
        ) : undefined}
      </StyledNavigation>
      <StyledLine size="100%" horizontal />
    </StyledMenuFilter>
  )
}
export { MenuFilter }
