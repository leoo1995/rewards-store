import React, { useContext } from "react"
import styled from "styled-components"
import { Button } from "../../atoms/Button"
import { GlobalStates } from "../../../context/GlobalStates"
import { RedeemContainer } from "../../molecules/RedeemContainer"
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  box-sizing: border-box;
`
const RedeemWrapper = props => {
  const { state } = useContext(GlobalStates)
  const { user } = state
  const { redeemHistory } = user
  return (
    <Wrapper>
      {redeemHistory
        ?.sort((a, b) => {
          const dateA = new Date(a.createDate)
          const dateB = new Date(b.createDate)
          return dateB.getTime() - dateA.getTime()
        })
        .map(item => (
          <RedeemContainer {...item} />
        ))}
    </Wrapper>
  )
}

export { RedeemWrapper }
