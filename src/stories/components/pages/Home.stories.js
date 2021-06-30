import React from "react"
import { Home } from "../../../components/pages/Home"
export default {
  title: "components/pages/Home",
  component: Home
}
const Template = args => <Home {...args} />

export const Default = Template.bind({})
Default.args = {
  user: "Julian Coli",
  points: 1000
}
