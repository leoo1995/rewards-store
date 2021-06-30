import React from "react"
import { Button } from "../../../components/atoms/Button"
export default {
  title: "Components/atoms/Button",
  component: Button
}
const Template = args => <Button {...args}>{args.children}</Button>

export const Primary = Template.bind({})
Primary.args = {
  type: "primary",
  children: "Button"
}
export const Secondary = Template.bind({})
Secondary.args = {
  type: "secondary",
  children: "Button"
}

export const Success = Template.bind({})
Success.args = {
  type: "success",
  children: "Button"
}
