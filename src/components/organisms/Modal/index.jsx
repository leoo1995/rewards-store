import React, { useContext } from "react"
import styled from "styled-components"
import Loader from "react-loader-spinner"
//components
import { Label } from "../../atoms/Label"
import { Button } from "../../atoms/Button"
import { Icon } from "../../atoms/Icon"
//context
import { GlobalStates } from "../../../context/GlobalStates"
const Card = styled.div`
  border-radius: 5px;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  justify-content: center;
  width: 300px;
  height: 200px;
  box-sizing: border-box;
`
const Container = styled.div`
  margin: 0;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 4;
  display: ${({ modalVisible }) => (modalVisible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`
const Modal = () => {
  const { state, setState } = useContext(GlobalStates)
  const { modalVisible, redeemLoading } = state

  return (
    <Container {...{ modalVisible }}>
      <Card>
        {redeemLoading ? (
          <Loader
            type="Rings"
            color="#00BFFF"
            height={100}
            width={100}
            // timeout={3000} //3 secs
          />
        ) : (
          <>
            <Icon success />
            <Label color="#434343" size="24px">
              Compra exitosa
            </Label>
            <Button
              type="success"
              onClick={() => setState({ ...state, modalVisible: false })}
            >
              Continuar
            </Button>
          </>
        )}
      </Card>
    </Container>
  )
}

export { Modal }
