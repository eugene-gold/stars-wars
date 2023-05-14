import styled from "@emotion/styled/macro";

export const PlanetsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.5rem;
  margin: 0 1rem;
  justify-items: center;
`
export const PageName = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`
export const PlanetElement = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  border: 2px solid #FFE300;
  border-radius: 0.5rem;
  
  h2 {
    text-align: center;
  }

`