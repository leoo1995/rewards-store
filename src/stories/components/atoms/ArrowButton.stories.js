import React from "react"
import { ArrowButton } from "../../../components/atoms/ArrowButton"
export default {
  title: "Components/atoms/ArrowButton",
  component: ArrowButton
}
const Template = args => <ArrowButton {...args} />
// export const Right = props => <ArrowButton type="right" />
// export const Left = props => <ArrowButton type="left" />
export const ButtonRight = Template.bind({})
ButtonRight.args = {
  type: "right"
}
export const ButtonLeft = Template.bind({})
ButtonLeft.args = {
  type: "left"
}
