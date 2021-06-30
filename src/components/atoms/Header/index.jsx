import React from "react"
import imageHeader from "../../../assets/header-x2.png"
import styled from "styled-components"

const StyledHeader = styled.div`
  max-width: 1440px;
  /* width: 100%; */
  /* display: inline-block; */
  position: relative;
  img {
    width: 100%;
  }
  /* z-index: 0; */
  &:after {
    /* content: "asdf"; */
    position: absolute;
    /* background-color: red; */
    bottom: 80px;
    left: 133px;
    color: white;
    font-weight: bold;
    font-size: 64px;
    display: inline-block;
    /* content: ${({ tag }) => tag || "adads"}; */
    content: "Electronics";
    /* width: ${({ size }) => size || "42px"}; */
    /* height: 100px; */
    /* z-index: 2; */
  }
`
const Header = () => {
  return (
    <StyledHeader>
      <img src={imageHeader} alt="header" />
    </StyledHeader>
  )
}

export { Header }
