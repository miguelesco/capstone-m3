/* eslint-disable linebreak-style */
import styled from 'styled-components';
import { flex } from '../../styles/breakPoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  padding: 0px;
  margin: 0px;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e5e5e5;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ListOfDetails = styled.ul`
  margin: 0;
`;

export const ListOfDetailsItem = styled.li`
  ${flex('row', 'center', 'space-between')};
  ${(props) => (props.index % 2 === 0 ? 'background-color: rgba(235, 94, 136, 1);' : 'background-color: rgba(235, 94, 136, .95);')}
  padding: 10px 5px;
  box-sizing: border-box;
  color: #fff;
  p {
    text-transform: capitalize;
  }
  span {
    text-align: right;
  }
`;
