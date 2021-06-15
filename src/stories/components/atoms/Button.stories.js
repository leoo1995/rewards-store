import React from "react"
import { Button } from "../../../components/atoms/Button"
export default {
  title: "Components/atoms/Button",
  component: Button
}
const Template = args => <Button {...args}>{args.label}</Button>

export const Primary = Template.bind({})
Primary.args = {
  type: "primary",
  label: "Button"
}
export const Secondary = Template.bind({})
Secondary.args = {
  type: "secondary",
  label: "Button"
}
