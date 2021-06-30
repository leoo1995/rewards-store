import React, { useState, useEffect, createContext } from "react"
import { getProducts, getUser } from "../services/api"
const GlobalStates = createContext()
export { GlobalStates }
export const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    products: [],
    user: {},
    modalVisible: false,
    redeemLoading: false,
    addPointsLoading: false
  })
  useEffect(() => {
    const getData = async () => {
      const products = await getProducts()
      const user = await getUser()
      setState({ ...state, user, products })
    }
    getData()
  }, [])

  return (
    <GlobalStates.Provider value={{ state, setState }}>
      {children}
    </GlobalStates.Provider>
  )
}
