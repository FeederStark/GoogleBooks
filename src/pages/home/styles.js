import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CardsContainer = styled.div`
  margin-top: 30px;
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CardWrapper = styled(Link)`
  margin: 20px;
`;

export const Card = styled.img`
  height: 200px;
  width: 150px;
`;

export const Label = styled.label`
  position: relative;
  margin: auto;
  width: 100%;
  max-width: 280px;

  input {
    -webkit-appearance: none;
    width: 100%;
    border: 0;
    font-family: inherit;
    padding: 12px 0;
    height: 48px;
    font-size: 16px;
    font-weight: 500;
    border-bottom: 2px solid #c8ccd4;
    background: none;
    border-radius: 0;
    color: #223254;
    transition: all 0.15s ease;
    &:hover {
      background: rgba(#223254, 0.03);
    }
    &:not(:placeholder-shown) + span {
      color: #5a667f;
      transform: translateY(-26px) scale(0.75);
    }
    &:focus {
      background: none;
      outline: none;
    }
    + span {
      color: #0077ff;
      transform: translateY(-26px) scale(0.75);
    }
    + .border {
      transform: scaleX(1);
    }
  }
`;

export const LabelSpan = styled.span`
  position: absolute;
  top: 16px;
  left: 0;
  font-size: 16px;
  color: #9098a9;
  font-weight: 500;
  transform-origin: 0 0;
  transition: all 0.2s ease;
`;

export const BorderSpan = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background: #0077ff;
  transform: scaleX(0);
  transform-origin: 0 0;
  transition: all 0.15s ease;
`;
