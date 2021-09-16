/* eslint-disable linebreak-style */
import styled from 'styled-components';
import { flex } from '../../../styles/breakPoints';

export const CardContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
`;

export const Card = styled.div`
  ${flex('column', 'center', 'center')};
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  margin: 0px;
  background-color: rgba(235, 94, 136, .9);
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
`;

export const CardImage = styled.div`
  ${flex('column', 'center', 'center')};
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    opacity: 0.5;
  }
`;

export const Description = styled.div`
  ${flex('column', 'flex-end', 'center')};
  width: 100%;
  height: 100%;
  margin: 0px;
  p {
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    margin-top: 5px;
    margin-bottom: 0;
  }
  span {
    font-size: 0.6rem;
    font-weight: normal;
    color: #fff;
  }
`;
