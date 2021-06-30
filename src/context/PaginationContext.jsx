import React, { createContext, useContext } from "react"
import { GlobalStates } from "./GlobalStates"
import usePagination from "../hooks/usePagination"

export const PaginationContext = createContext()
export const PaginationProvider = ({ children }) => {
  const { state } = useContext(GlobalStates)
  const { products } = state
  const {
    currentData: currentProducts,
    next,
    prev,
    maxPage,
    currentPage
  } = usePagination(products, 16)
  return (
    <PaginationContext.Provider
      value={{ currentProducts, next, prev, maxPage, currentPage }}
    >
      {children}
    </PaginationContext.Provider>
  )
}
