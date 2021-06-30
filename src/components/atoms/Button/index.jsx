import React from "react"
import {
  StyledButtonPrimary,
  StyledButtonSecondary,
  StyledButtonSuccess
} from "./styles"
// import PropTypes from "prop-types"

export const Button = props => {
  if (props.type === "primary")
    return (
      <StyledButtonPrimary {...props}>{props.children}</StyledButtonPrimary>
    )
  if (props.type === "success")
    return (
      <StyledButtonSuccess {...props}>{props.children}</StyledButtonSuccess>
    )
  return (
    <StyledButtonSecondary {...props}>{props.children}</StyledButtonSecondary>
  )
}

// Button.propTypes = {
//   children: PropTypes.string.isRequired,
//   type: PropTypes.string,
//   onClick: PropTypes.func
// }
// Button.defaultProps = {
//   children: "Button",
//   type: PropTypes.oneOf(["primary", "secondary"]),
//   onClick: undefined
// }
