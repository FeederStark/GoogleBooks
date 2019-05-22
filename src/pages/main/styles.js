import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${props => props.overDiv && '#ffecb3'};

  div {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }
`;

export const Button = styled(Link)`
  background: none;
  border: 0;
  font-size: 80px;
  color: #212121;
  cursor: pointer;
  text-decoration: none;
`;
