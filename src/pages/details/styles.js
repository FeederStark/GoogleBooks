import styled from 'styled-components';

export const Container = styled.div`
  width: 30%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  padding: 20px;
`;

export const TopHeader = styled.div`
  display: flex;
  width: 100%;
`;

export const LeftDiv = styled.div`
  img {
    height: 200px;
    width: 150px;
  }
`;

export const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  align-items: flex-start;
  justify-content: space-between;

  p {
    color: #bda807;
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: flex-end;
  h2 {
    font-size: 18px;
  }
  img {
    height: 100px;
    width: 100px;
    position: absolute;
    margin-top: 39px;
    margin-left: 200px;
  }
`;

export const BottomHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  p {
    width: 150px;
    text-align: center;
    color: #bda807;
  }
  div {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const Buy = styled.button`
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 10px;
  letter-spacing: 4px;
  position: relative;
  right: 50px;
  height: 40px;
  background-color: #16a085;
  border: none;
  border-radius: 10px;
  color: #fff;
  padding: 10px;
  width: 150px;
  text-align: center;
  transition-duration: 0.4s;
  overflow: hidden;
  box-shadow: 0 5px 15px #193047;
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

export const DetailsContainer = styled.div`
  margin-top: 30px;
  padding: 20px;
  background: #fff;

  p {
    color: #868b90;
    font-size: 14px;
  }
`;
