import React from "react"
import { Icon } from "../../atoms/Icon"
import { Label } from "../../atoms/Label"
import { StyledProfile, PointsAvailable } from "./styles"

export const Profile = props => {
  return (
    <StyledProfile>
      <Label size="24px" color={props.color || "#616161"}>
        {props.user}
      </Label>
      <PointsAvailable {...props}>
        <Label size="24px" color={props.color || "#616161"}>
          {props.points}
        </Label>
        <Icon coin size="24px" />
      </PointsAvailable>
    </StyledProfile>
  )
}
