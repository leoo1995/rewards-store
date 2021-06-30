import React from "react"
import { Top } from "../../organisms/Top"
import { Header } from "../../atoms/Header"
import { MenuFilter } from "../../organisms/MenuFilter"
import { Products } from "../../organisms/Products"
import { MenuBottom } from "../../organisms/MenuBottom"
import { Modal } from "../../organisms/Modal"
import { Dropdown } from "../../organisms/Dropdown"
import styled from "styled-components"

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
const Home = () => {
  return (
    <Container>
      <Modal />
      <Top />
      <Dropdown></Dropdown>
      <Header />
      <MenuFilter />
      <Products />
      <MenuBottom />
    </Container>
  )
}

export { Home }
