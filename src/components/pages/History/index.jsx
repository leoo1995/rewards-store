//libraries
import React from "react"
import styled from "styled-components"
//components
import { Top } from "../../organisms/Top"
import { Header } from "../../atoms/Header"
import { Dropdown } from "../../organisms/Dropdown"
import { RedeemWrapper } from "../../organisms/RedeemWrapper"

const Container = styled.div`
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  position: relative;
  margin: auto;
  /* gap: 30px; */
`
const History = () => {
  return (
    <Container>
      <Top />
      <Dropdown />
      <Header />
      <RedeemWrapper />
    </Container>
  )
}

export { History }
