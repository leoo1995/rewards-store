import React from "react"
import { Profile } from "../../../components/molecules/Profile"
export default {
  title: "Components/molecules/Profile",
  component: Profile
}
const Template = args => <Profile {...args} />

export const Default = Template.bind({})
Default.args = {
  user: "Julia Coli",
  points: 0,
  color: ""
}
