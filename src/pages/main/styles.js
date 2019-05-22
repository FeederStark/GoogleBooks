import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled(Link)`
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 80px;
  letter-spacing: 4px;
  position: relative;
  background-color: #ffe207;
  border: none;
  border-radius: 10px;
  color: #fff;
  padding: 10px;
  width: 100%;
  height: 400px;
  text-align: center;
  transition-duration: 0.4s;
  overflow: hidden;
  border-radius: 4px;
  &:hover {
    background: #fff;
    box-shadow: 0px 2px 10px 5px #1abc9c;
    color: #000;
  }
  &:after {
    content: '';
    background: #1abc9c;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s;
  }
  &:active {
    &::after {
      padding: 0;
      margin: 0;
      opacity: 1;
      transition: 0s;
    }
  }
  &:focus {
    outline: 0;
  }
`;
