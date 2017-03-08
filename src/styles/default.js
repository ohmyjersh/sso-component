import styled from 'styled-components';
import * as Base from './base';

export const Link = styled(Base.Link)`
  color: #3498db;
  &:hover { 
    color: #3cb0fd;
  }
`;

export const Button = styled(Base.Button)`
  outline: none;
  border: none;
  -webkit-border-radius: 3;
  -moz-border-radius: 3;
  border-radius: 3px;
  text-shadow: 1px 1px 3px #666666;
  font-family: Arial;
  color: #ffffff;
  font-size: 20px;
  background: #3498db;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  width:100%;
  box-sizing: border-box;

  &:hover { 
  background: #3cb0fd;
  text-decoration: none;
  }
`;

export const Input = styled(Base.Input)`
    outline: none;
    position: relative;
    margin: 10px 0px;
    padding: 5px 5px 5px 15px;
    display: inline-block;
    width: 100%;
    height: 28px;
    cursor: text;
    font-size: 15px;
    line-height: 1.5;
    color: rgba(0,0,0,.65);
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    -webkit-transition: all .3s;
    transition: all .3s;
    box-sizing: border-box;

  &:hover {
    box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
  }
`;

export const Container = styled(Base.Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const Card = styled(Base.Card)`
    justify-content: center;
    overflow:hidden;
    background: #fff;
    border-radius: 4px;
    position: relative;
    -webkit-transition: all .3s;
    transition: all .3s;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    min-width: 400px;
`;

 Card.Header = styled(Base.Card.Header)`
   color: #ffffff;
    background: #3498db;
`;

Card.Content = styled(Base.Card.Content)`
  padding: 20px;
`;

Card.Footer = styled(Base.Card.Footer)`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

export const Label = styled(Base.Label)`
    font-size: 20px;
    color: black;
    margin-bottom: 10px;
    box-sizing: border-box;
`;

export const Error = styled(Base.Error)`
    border: 1px solid;
    border-radius: 3px;
    margin: 10px 0px;
    padding:12px;
    color: #D8000C;
    font-size:12px;
    background-color: #FFBABA;
    box-sizing: border-box;
`
