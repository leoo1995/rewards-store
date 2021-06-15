import React from "react"
import { Icon } from "../../../components/atoms/Icon"
export default {
  title: "Components/atoms/Icon",
  component: Icon
}
const Template = args => <Icon {...args}></Icon>

export const Logo = Template.bind({})
Logo.args = {
  logo: true,
  size: ""
}
export const Buy = Template.bind({})
Buy.args = {
  buy: true,
  size: ""
}
export const BuyWhite = Template.bind({})
BuyWhite.args = {
  buy: true,
  white: true,
  size: ""
}
export const Coin = Template.bind({})
Coin.args = {
  coin: true,
  size: ""
}
