import React, { useState } from "react"
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

export const ProductCard = ({ img, name, category, cost, ...props }) => {
  const [hover, setHover] = useState(false)
  const AmountNeed = () => {
    return (
      <StyledNeedAmount>
        <Label color="white" size="14px">
          You need 4000
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
      {hover && props.redeem && (
        <StyledProductCardHover>
          <div>
            <Label color="#fff" size="36px">
              {cost}
            </Label>
            <Icon coin size="26px" />
          </div>
          <RedeemButton />
        </StyledProductCardHover>
      )}
      <FloatDiv>
        {props.redeem ? <Icon buy white={hover} size="42px" /> : <AmountNeed />}
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
