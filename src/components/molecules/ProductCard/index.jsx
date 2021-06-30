import React, { useState, useContext } from "react"
import {
  StyledInfo,
  StyledProductCard,
  StyledProductCardHover,
  StyledNeedAmount,
  FloatDiv
} from "./styles"
import { Label } from "../../atoms/Label"
import { Icon } from "../../atoms/Icon"
import { Line } from "../../atoms/Line"
import { RedeemButton } from "../../atoms/RedeemButton"
import { GlobalStates } from "../../../context/GlobalStates"
import { redeemProduct, getUser } from "../../../services/api"
export const ProductCard = ({ img, name, category, cost, ...props }) => {
  const { state, setState } = useContext(GlobalStates)
  const { points } = state.user
  const [hover, setHover] = useState(false)
  const AmountNeed = () => {
    return (
      <StyledNeedAmount>
        <Label color="white" size="14px">
          You need {cost - points}
        </Label>
        <Icon coin size="20px" />
      </StyledNeedAmount>
    )
  }
  return (
    <StyledProductCard
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover && points >= cost ? (
        <StyledProductCardHover
          onClick={() => {
            // redeemProduct(props._id).then(response => {
            //   getUser().then(user => {
            //     setState({ ...state, modalVisible: true, user })
            //   })
            // })
            setState({ ...state, modalVisible: true, redeemLoading: true })
            const updatePoints = async () => {
              await redeemProduct(props._id)
              // console.log(response)
              const user = await getUser()
              setState({ ...state, user, modalVisible: true })
              // console.log(state)
            }
            updatePoints()
          }}
        >
          <div>
            <Label color="#fff" size="36px">
              {cost}
            </Label>
            <Icon coin size="26px" />
          </div>
          <RedeemButton />
        </StyledProductCardHover>
      ) : undefined}
      <FloatDiv>
        {points >= cost ? (
          <Icon buy white={hover} size="42px" />
        ) : (
          <AmountNeed />
        )}
      </FloatDiv>
      <img src={img.hdUrl} alt={name} />
      <Line horizontal size="100%" />
      <StyledInfo>
        <Label color="#a3a3a3" size="16px">
          {category}
        </Label>
        <Label size="18px" color="#616161">
          {name}
        </Label>
      </StyledInfo>
    </StyledProductCard>
  )
}
