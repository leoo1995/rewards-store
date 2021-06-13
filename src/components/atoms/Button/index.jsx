import React from "react"
import { StyledButtonPrimary, StyledButtonSecondary } from "./styles"
import PropTypes from "prop-types"

export const Button = ({ children, ...props }) => {
  if (props.type === "primary")
    return <StyledButtonPrimary {...props}>{children}</StyledButtonPrimary>
  return <StyledButtonSecondary {...props}>{children}</StyledButtonSecondary>
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func
}
Button.defaultProps = {
  children: "Button",
  type: PropTypes.oneOf(["primary", "secondary"]),
  onClick: undefined
}
