import { StyledLink } from "./styles"
import { PropTypes } from "prop-types"
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

StyledLink.propTypes = {
  to: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func
}
StyledLink.defaultProps = {
  to: "",
  type: "right",
  onClick: undefined
}
