import React from "react"
import { Coin } from "../../../components/atoms/Coin"
export default {
  title: "Components/atoms/Coin",
  component: Coin
}
const Template = args => <Coin {...args}>{args.label}</Coin>

export const Default = Template.bind({})
Default.args = {
  size: ""
}
