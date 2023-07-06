import styled from "@emotion/styled/macro";

export const NavWrapper = styled.header`
    display: flex;
    width: 100%;
    height: 7rem;
    justify-content: center;
    align-items: center;
    a {
      margin-right: 1rem;
    }
    .active {
      color: yellow;
      font-size: 1.5rem;
    }
`