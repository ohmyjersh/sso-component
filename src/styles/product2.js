import styled from 'styled-components';

import * as Defaults from './default';

export const Link = styled(Defaults.Link)`
    color:#f7b334;
    &:hover {
     color: #f9c565;   
    }
`

export const Button = styled(Defaults.Button)`
  background-color: #f7b334;
  &:hover {
    background-color:#f9c565;
  }
`;

export const Card = Defaults.Card;
export const Input = Defaults.Input;
export const Container = Defaults.Container;
//export const Label = Defaults.Label;