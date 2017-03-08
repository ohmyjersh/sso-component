import styled from 'styled-components';
import * as Base from './base';

export const Link = styled(Base.Link)`
    color:#f7b334;
    &:hover {
     color: #f9c565;   
    }
`

export const Button = styled(Base.Button)`
  background-color: #f7b334;
  &:hover {
    background-color:#f9c565;
  }
`;

export const Card = Base.Card;
export const Input = Base.Input;
export const Container = Base.Container;