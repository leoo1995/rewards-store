import React from "react"
import { StyledButtonPrimary, StyledButtonSecondary } from "./styles"
import PropTypes from "prop-types"

export const Button = ({ label, ...props }) => {
  if (props.type === "primary")
    return <StyledButtonPrimary {...props}>{label}</StyledButtonPrimary>
  return <StyledButtonSecondary {...props}>{label}</StyledButtonSecondary>
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func
}
Button.defaultProps = {
  label: "Button",
  type: PropTypes.oneOf(["primary", "secondary"]),
  onClick: undefined
}
