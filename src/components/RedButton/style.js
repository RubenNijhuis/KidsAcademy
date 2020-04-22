import styled from "styled-components"

export const Button = styled.button`
  font-weight: 500;
  text-transform: uppercase;
  width: ${props => (props.full ? "100%" : "auto")};
  height: 50px;
  background: rgb(208, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(208, 0, 0, 1) 0%,
    rgba(149, 0, 0, 1) 100%
  );
  border: none;
  color: white;
  padding: 0 5%;
  border-radius: 2px;
`
