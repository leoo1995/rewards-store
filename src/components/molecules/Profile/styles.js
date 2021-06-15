import styled from "styled-components"

export const StyledProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 27px;
  margin: 0;
  padding: 0;
  background-color: transparent;
`
export const PointsAvailable = styled.div`
  background-color: ${({ background }) => background || "#EDEDED"};
  border-radius: 20.5px;
  padding: 13px;
  margin: 0;
  height: 48px;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  gap: 6px;
`
