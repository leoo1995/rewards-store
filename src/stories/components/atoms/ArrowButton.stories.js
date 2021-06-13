import React from "react"
import { ArrowButton } from "../../../components/atoms/ArrowButton"
export default {
  title: "Components/atoms/ArrowButton",
  component: ArrowButton
}
export const Template = props => <ArrowButton {...props} />
// export const Right = props => <ArrowButton type="right" />
// export const Left = props => <ArrowButton type="left" />
export const ButtonRight = Template.bind({})
ButtonRight.args = {
  type: "right",
  label: "Button"
}
export const ButtonLeft = Template.bind({})
ButtonLeft.args = {
  type: "left",
  label: "Button"
}
