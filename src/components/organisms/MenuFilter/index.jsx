import React, { useState } from "react"
import { Pagination } from "../../molecules/Pagination"
import { Label } from "../../atoms/Label"
import { Line } from "../../atoms/Line"
import { Button } from "../../atoms/Button"
import { ArrowButton } from "../../atoms/ArrowButton"
import { StyledMenuFilter, StyledNavigation, StyledLine } from "./styles"
export const MenuFilter = () => {
  const [filter, setFilter] = useState({
    mostRecent: true,
    lowestPrice: false,
    highestPrice: false
  })

  return (
    <StyledMenuFilter>
      {/* <Pagination {...{ numberOfProductsSeen, numberOfProducts }} /> */}
      <div>
        <Pagination numberOfProductsSeen={16} numberOfProducts={32} />
        <Line vertical size="100%" />{" "}
        <Label size="24px" color="#a3a3a3">
          Sort by:
        </Label>
        <Button
          type={filter.mostRecent && "primary"}
          onClick={() =>
            setFilter({
              mostRecent: true,
              lowestPrice: false,
              highestPrice: false
            })
          }
        >
          Most recent
        </Button>
        <Button
          type={filter.lowestPrice && "primary"}
          onClick={() =>
            setFilter({
              mostRecent: false,
              lowestPrice: true,
              highestPrice: false
            })
          }
        >
          Lowest price
        </Button>
        <Button
          type={filter.highestPrice && "primary"}
          onClick={() =>
            setFilter({
              mostRecent: false,
              lowestPrice: false,
              highestPrice: true
            })
          }
        >
          Highest price
        </Button>
      </div>
      <StyledNavigation>
        <ArrowButton type="left" />
        <ArrowButton ype="right" />
      </StyledNavigation>
      <StyledLine size="100%" horizontal />
    </StyledMenuFilter>
  )
}
