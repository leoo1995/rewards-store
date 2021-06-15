import React from "react"
import { RedeemButton } from "../../../components/atoms/RedeemButton"
export default {
  title: "Components/atoms/RedeemButton",
  component: RedeemButton
}
const Template = args => <RedeemButton {...args}>{args.label}</RedeemButton>

export const Default = Template.bind({})
Default.args = {
  label: ""
}
