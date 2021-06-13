import React from "react"
import { Button } from "../../components/atoms/Button"
export default {
  title: "Components/atoms/Button",
  component: Button
}
export const Template = props => <Button {...props}>Button</Button>

export const Primary = Template.bind({})
Primary.args = {
  type: "primary",
  label: "Button"
}
export const Secondary = Template.bind({})
Secondary.args = {
  type: "secondary",
  label: "Button"
}
// export const Redeem = Template.bind({})
// Redeem.args = {
//   redeem: true
//   // primary: false
//   // label: "Button"
// }
// export const ArrowLeft = Template.bind({})
// ArrowLeft.args = {
//   arrowLeft: true
//   // label: "Button"
// }
// export const ArrowRight = Template.bind({})
// ArrowRight.args = {
//   arrowRight: true
//   // label: "Button"
// }
