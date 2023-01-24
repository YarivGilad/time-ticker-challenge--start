import React from "react";
// import Ticker from "./Ticker";
import styled from "styled-components";

export function App() {
  return (
    <Container>
      <h1>
        Ticker challenge{" "}
        <span role="img" aria-label="confetti">
          🎉
        </span>
      </h1>
      {/* <Ticker message="Hello Ticker" /> */}
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  h1 {
    padding-bottom: 2rem;
  }
`;
