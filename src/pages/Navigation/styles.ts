import styled from "@emotion/styled/macro";
import { ReactComponent as navlogo } from "logo.svg";

export const NavLogo = styled(navlogo)`
  height: 3rem;
  margin-right: 2rem;
  filter: drop-shadow(-9px -3px 2px crimson);
`;

export const NavWrapper = styled.header`
    display: flex;
    width: 100%;
    height: 7rem;
    background-color: #c8c8c8;
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