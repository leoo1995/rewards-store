import React, { useContext } from "react"
import { Link } from "react-router-dom"
//componenst
import { Icon } from "../../atoms/Icon"
import { Label } from "../../atoms/Label"
//styles
import { StyledProfile, PointsAvailable } from "./styles"
//context
import { GlobalStates } from "../../../context/GlobalStates"

export const Profile = props => {
  const { state } = useContext(GlobalStates)
  const { user } = state

  return (
    <StyledProfile>
      <Link to="/history">
        <Label size="24px" color={props.color || "#616161"}>
          {user.name}
        </Label>
      </Link>
      <PointsAvailable {...props}>
        <Label size="24px" color={props.color || "#616161"}>
          {user.points}
        </Label>
        <Icon coin size="24px" />
      </PointsAvailable>
    </StyledProfile>
  )
}
