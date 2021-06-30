import React from "react"
import { Label } from "../../atoms/Label"
// import PropTypes from "prop-types"

const Pagination = props => {
  return (
    <div>
      <Label color="#616161" size="36px">
        {props.numberOfProductsSeen} of {props.numberOfProducts}
      </Label>
    </div>
  )
}

// Pagination.propTypes = {}

export { Pagination }
