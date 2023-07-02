import styled from "@emotion/styled/macro";

export const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.5rem;
  margin: 0 1rem;
  justify-items: center;
`
export const ItemName = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`
export const Item = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  border: 2px solid #FFE300;
  border-radius: 0.5rem;
  
  h2 {
    text-align: center;
  }

`