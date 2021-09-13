/* eslint-disable linebreak-style */
import styled from 'styled-components';
import { flex } from '../../../styles/breakPoints';

const NavbarContainer = styled.nav`
  background-color: rgba(235, 94, 136, 1);
  position:relative;
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.05);
  ${flex('row', 'center', 'center')};
  width: 100%;
  z-index: 1;
  box-sizing: border-box;
  ul {
    flex-direction: row;
    display: flex;
    gap: 0.5rem;
    list-style: none;
    align-items: center;
    li {
      font-size: 0.8rem;
      font-weight: 700;
      color: #121212;
      a {
        text-decoration: none;
      }
      a:hover {
        color: blue;
      }
      a:active, a:focus {
        text-decoration: underline blue; 
        color: blue;
      }
    }
  }
`;

export const Title = styled.h1`
  color: white;
  font-size: 16px;
  font-weight: 700;
  text-align: right;
`;

export const ConfigBtn = styled.div`
  ${flex('row', 'center', 'flex-end')};
  position: absolute;
  right: 8px;
  svg {
    color: white;
    font-size: 0.8rem;
  }
`;

export const BackArrow = styled.div`
${flex('row', 'center', 'flex-end')};
  position: absolute;
  left: 8px;
  svg {
    color: white;
    font-size: 0.8rem;
  }
`;

export default NavbarContainer;
