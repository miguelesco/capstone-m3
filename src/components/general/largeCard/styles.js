/* eslint-disable linebreak-style */
import styled from 'styled-components';

export const Card = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  width: 100%;
  background-color: rgba(235, 94, 136, .9);
  padding: 22px;
  box-sizing: border-box;
`;

export const TopTitle = styled.div`
  width: 100%;
  height: 100%;
  p {
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 0px;
  }
  span {
    font-size: 12px;
    color: #fff;
    font-weight: normal;
  }
`;
