import React from "react"
import { Pagination } from "../../../components/molecules/Pagination"
export default {
  title: "Components/molecules/Pagination",
  component: Pagination
}
const Template = args => <Pagination {...args} />

export const Default = Template.bind({})
Default.args = {
  numberOfProductsSeen: 16,
  numberOfProducts: 32
}
