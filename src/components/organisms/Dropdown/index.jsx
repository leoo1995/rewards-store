import React, { useState, useContext } from "react"
import { Label } from "../../atoms/Label"
import { Button } from "../../atoms/Button"
import { addPoints, getUser } from "../../../services/api"
import { GlobalStates } from "../../../context/GlobalStates"
import Loader from "react-loader-spinner"
import styled from "styled-components"
const StyledDropdown = styled.form`
  display: ${({ dropdownVisible }) => (dropdownVisible ? `flex` : `none`)};

  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 0;
  padding: 16px;
  box-sizing: border-box;
  width: 200px;
  position: absolute;
  z-index: 1;
  top: 80px;
  right: 0;
  background-color: rgba(255, 255, 255, 0.9);

  display: grid;
  grid-template-columns: 20px 1fr;
  align-items: center;
  justify-content: center;
  gap: 10px 5px;
  div {
    grid-column: 1/-1;
    display: grid;
    place-items: center;
  }
  input,
  label {
    cursor: pointer;
  }
`
const Dropdown = () => {
  const { state, setState } = useContext(GlobalStates)
  const { addPointsLoading } = state
  const handleChange = event => setSelectedPoints(+event.target.value)
  const handleSubmit = event => {
    event.preventDefault()
    setState({ ...state, addPointsLoading: true })
    const updatePoints = async () => {
      await addPoints(selectedPoints)
      const user = await getUser()
      setState({ ...state, user })
      // console.log(state)
    }
    updatePoints()
  }
  const [selectedPoints, setSelectedPoints] = useState(1000)
  const [dropdownVisible, setDropdownVisible] = useState(true)
  return (
    <StyledDropdown {...{ dropdownVisible }} onSubmit={handleSubmit}>
      <input
        type="radio"
        id="1000"
        value={1000}
        checked={selectedPoints === 1000}
        onChange={handleChange}
      />
      <label htmlFor="1000">
        <Label color="#616161" size="24px">
          1000 points
        </Label>
      </label>
      <input
        type="radio"
        id="5000"
        value={5000}
        checked={selectedPoints === 5000}
        onChange={handleChange}
      />
      <label htmlFor="5000">
        <Label color="#616161" size="24px">
          5000 points
        </Label>
      </label>
      <input
        type="radio"
        id="7500"
        value={7500}
        checked={selectedPoints === 7500}
        onChange={handleChange}
      />
      <label htmlFor="7500">
        <Label color="#616161" size="24px">
          7500 points
        </Label>
      </label>
      <div>
        {addPointsLoading ? (
          <Loader type="Rings" color="#00BFFF" height={50} />
        ) : (
          <Button type="submit" type="primary">
            Add points
          </Button>
        )}
      </div>
    </StyledDropdown>
  )
}

export { Dropdown }
