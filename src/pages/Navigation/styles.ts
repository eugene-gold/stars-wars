import styled from "@emotion/styled/macro";
import { ReactComponent as navlogo } from "shared/assets/icons/logo.svg";
import { ReactComponent as mando } from "shared/assets/icons/mando.svg";

export const DarkLogo = styled(navlogo)`
  height: 3rem;
  margin-right: 2rem;
  filter: drop-shadow(-9px -3px 2px crimson);
`;

export const LightLogo = styled(mando)`
  height: 3rem;
  margin-right: 2rem;
  filter: drop-shadow(-9px -3px 2px gold);
`;

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