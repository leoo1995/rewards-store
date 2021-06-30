import React from "react"
import { Header } from "../../../components/atoms/Header"
export default {
  title: "components/atoms/Header",
  component: Header
}
const Template = args => <Header {...args} />

export const Default = Template.bind({})
Default.args = {
  // label: "Electronics"
}
