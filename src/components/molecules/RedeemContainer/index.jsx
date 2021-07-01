import React, { useContext } from "react"
import moment from "moment"
import styled from "styled-components"
// components
import { Button } from "../../atoms/Button"
import { Label } from "../../atoms/Label"
import { Icon } from "../../atoms/Icon"
//context
import { GlobalStates } from "../../../context/GlobalStates"
// services
import { redeemProduct, getUser } from "../../../services/api"
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  width: 100%;
  background-color: white;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  box-sizing: border-box;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    height: 220px;
  }
  /* background-color: red; */
`
const RedeemContainer = props => {
  const { state, setState } = useContext(GlobalStates)
  const { user } = state
  const dateRedeem = moment(props.createDate).format("dddd,  MMMM Do [in] YYYY")
  const AmountNeed = () => {
    return (
      <div>
        <Label color="#616161" size="18px">
          You need {props.cost - user.points}
        </Label>
        <Icon coin size="20px" />
      </div>
    )
  }
  const handleClick = id => {
    setState({ ...state, modalVisible: true, redeemLoading: true })
    const updatePoints = async () => {
      await redeemProduct(id)
      // console.log(response)
      const user = await getUser()
      setState({ ...state, user, modalVisible: true })
      // console.log(state)
    }
    updatePoints()
  }
  return (
    <Container>
      <img src={props.img.hdUrl} alt={props.name} />
      <div>
        <Label size="18px" color="#616161">
          {props.name}
        </Label>
        <Label size="16px" color="#a3a3a3">
          {props.category}
        </Label>
      </div>
      <Label>{dateRedeem}</Label>{" "}
      {props.cost < user.points ? (
        <Button type="primary" onClick={() => handleClick(props.productId)}>
          Redeem again
        </Button>
      ) : (
        <AmountNeed />
      )}
    </Container>
  )
}

export { RedeemContainer }
