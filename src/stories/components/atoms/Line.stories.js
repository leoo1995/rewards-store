import React from "react"
import { Line } from "../../../components/atoms/Line"
export default {
  title: "Components/atoms/Line",
  component: Line
}
const Template = args => <Line {...args} />

export const Horizontal = Template.bind({})
Horizontal.args = {
  color: "",
  horizontal: true,
  size: "50px"
}
export const Vertical = Template.bind({})
Vertical.args = {
  color: "",
  vertical: true,
  size: "50px"
}
