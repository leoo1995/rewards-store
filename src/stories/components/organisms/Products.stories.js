import React from "react"
import { Products } from "../../../components/organisms/Products"
export default {
  title: "components/organisms/Products",
  component: Products
}
const Template = args => <Products {...args} />

export const Default = Template.bind({})
Default.args = {}
