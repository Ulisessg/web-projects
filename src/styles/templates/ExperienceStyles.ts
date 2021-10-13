import styled from "styled-components";
import { slice } from "../keyframes";

const Container = styled.div`
  width: 90vw;
  display: grid;
  display: -moz-grid;
  display: -ms-grid;
  justify-items: center;
  margin: 50px auto;
  animation: ${slice} 0.8s;
`;

export default Container;
