import React from "react"
import { Label } from "../../../components/atoms/Label"
export default {
  title: "Components/atoms/Label",
  component: Label
}
const Template = args => <Label {...args}>{args.label}</Label>

export const Default = Template.bind({})
Default.args = {
  label: "Label",
  color: "#616161",
  size: "16px"
}
