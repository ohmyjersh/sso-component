import styled from 'styled-components';

export const Button = styled.button`
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
  
  &:hover { 
  background: #3cb0fd;
  text-decoration: none;
  }
`;

export const Input = styled.input`
    outline: none;
    position: relative;
    margin-bottom: 10px;
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

  &:hover {
    box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
  }
`;

export const Card = styled.div`
    padding: 20px;
    overflow:hidden;
    background: #fff;
    border-radius: 4px;
    font-size: 12px;
    position: relative;
    overflow: none;
    -webkit-transition: all .3s;
    transition: all .3s;
    border: 1px solid #d9d9d9;
    &:hover {
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
    font-size: 20px;
    color: black;
    margin-bottom: 10px;
`;
