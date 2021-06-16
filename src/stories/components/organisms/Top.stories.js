import React from "react"
import { Top } from "../../../components/organisms/Top"
export default {
  title: "components/organisms/Top",
  component: Top
}
const Template = args => <Top {...args} />

export const Default = Template.bind({})
Default.args = {
  user: "Julian Coli",
  points: 1000
}
