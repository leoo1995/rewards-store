import React from "react"
import { ProductCard } from "../../../components/molecules/ProductCard"
export default {
  title: "Components/molecules/ProductCard",
  component: ProductCard
}
const Template = args => <ProductCard {...args} />

export const Redeem = Template.bind({})
Redeem.args = {
  redeem: true,
  name: "Dell UP3218k",
  category: "Monitors & TV",
  cost: 900,
  img: { hdUrl: "https://coding-challenge-api.aerolab.co/images/Dell-x2.png" }
}
export const NoRedeem = Template.bind({})
NoRedeem.args = {
  redeem: false,
  name: "Dell UP3218k",
  category: "Monitors & TV",
  cost: 900,
  img: { hdUrl: "https://coding-challenge-api.aerolab.co/images/Dell-x2.png" }
}
