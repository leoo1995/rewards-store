const URL_BASE = "https://coding-challenge-api.aerolab.co/"
const API_KEY =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM2YzY2NzliNzc4MTAwMjA5YzVhY2EiLCJpYXQiOjE2MjM2Mzk2NTV9.o8xMRInqv5vsI52W_QpmzPDdkWTN9nudYQXvD_uNfeo"
const headers = {
  "Content-type": "application/json",
  Accept: "application/json",

  Authorization: API_KEY
}
const HTTP_GET = {
  method: "GET",
  headers
}

export const getProducts = async () => {
  try {
    const response = await fetch(`${URL_BASE}products`, HTTP_GET)
    if (response.status > 399) {
      throw new Error("Not found status:" + response.status)
    }
    const products = await response.json()
    return products
  } catch (error) {
    console.error(error)
  }
}

export const getUser = async () => {
  try {
    const response = await fetch(`${URL_BASE}user/me`, HTTP_GET)
    if (response.status > 399) {
      throw new Error("Not found status:" + response.status)
    }
    const user = await response.json()
    // console.log(user)
    return user
  } catch (error) {
    console.error(error)
  }
}
export const redeemProduct = async productId => {
  const HTTP = {
    method: "POST",
    body: JSON.stringify({
      productId
    }),
    headers
  }
  try {
    const response = await fetch(`${URL_BASE}redeem`, HTTP)
    if (response.status > 399) {
      throw new Error("Not found status:" + response.status)
    }
    return response
  } catch (error) {
    console.error(error)
  }
}
export const addPoints = async amount => {
  const HTTP = {
    method: "POST",
    body: JSON.stringify({
      amount
    }),
    headers
  }
  try {
    const response = await fetch(`${URL_BASE}user/points`, HTTP)
    if (response.status > 399) {
      throw new Error("Not found status:" + response.status)
    }
    return response
  } catch (error) {
    console.error(error)
  }
}
