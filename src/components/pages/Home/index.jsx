//libraries
import React from "react"
import styled from "styled-components"
//components
import { Top } from "../../organisms/Top"
import { Header } from "../../atoms/Header"
import { MenuFilter } from "../../organisms/MenuFilter"
import { Products } from "../../organisms/Products"
import { MenuBottom } from "../../organisms/MenuBottom"
import { Dropdown } from "../../organisms/Dropdown"

const Container = styled.div`
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  position: relative;
  margin: auto;
`
const Home = () => {
  return (
    <Container>
      <Top />
      <Dropdown />
      <Header />
      <MenuFilter />
      <Products />
      <MenuBottom />
    </Container>
  )
}

export { Home }
