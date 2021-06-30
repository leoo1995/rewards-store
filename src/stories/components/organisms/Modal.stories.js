import React from "react"
import { Modal } from "../../../components/organisms/Modal"
export default {
  title: "Components/organisms/Modal",
  component: Modal
}
const Template = args => <Modal {...args}></Modal>

export const Success = Template.bind({})
Success.args = {
  logo: true,
  size: ""
}
