import { StyledLink } from "./styles"
import React from "react"
import arrowLeft from "../../../assets/icons/arrow-left.svg"
import arrowRight from "../../../assets/icons/arrow-right.svg"
export const ArrowButton = props => {
  return (
    <StyledLink {...props}>
      <img
        src={props.type === "left" ? arrowLeft : arrowRight}
        alt={props.type === "left" ? arrowLeft : arrowRight}
      />
    </StyledLink>
  )
}
