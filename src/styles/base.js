import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom'

export const Link = styled(RouterLink)`
  color: #000000;
  &:hover { 
    color: #000000;
  }
`;

export const Button = styled.button`
  outline: none;
  border: none;
  -webkit-border-radius: 3;
  -moz-border-radius: 3;
  border-radius: 3px;
  text-shadow: 1px 1px 3px #666666;
  font-family: Arial;
  color: ##000000;
  font-size: 20px;
  background: #ffffff;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  width:100%;
  box-sizing: border-box;
`;

export const Input = styled.input`
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
    color: #000000;
    background-color: #ffffff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    -webkit-transition: all .3s;
    transition: all .3s;
    box-sizing: border-box;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const Card = styled.div`
    justify-content: center;
    overflow:hidden;
    color: #000000;
    background-color: #ffffff;
    border-radius: 4px;
    position: relative;
    -webkit-transition: all .3s;
    transition: all .3s;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    min-width: 400px;
`;

 Card.Header = styled.div`
  border: 1px solid #d9d9d9;
  padding: 20px;
`;

Card.Content = styled.div`
  padding: 20px;
`;

Card.Footer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

export const Label = styled.label`
    font-size: 20px;
    color: #000000;
    background-color: #ffffff;
    margin-bottom: 10px;
    box-sizing: border-box;
`;

export const Error = styled.div`
    border: 1px solid;
    border-radius: 3px;
    margin: 10px 0px;
    padding:12px;
    color: #000000;
    background-color: #ffffff;
    font-size:12px;
    box-sizing: border-box;
`
