import styled, {injectGlobal} from 'styled-components';

import * as Defaults from './default';

export const Link = styled(Defaults.Link)`
    color:#a60003;
    &:hover {
     color: #a60003;   
    }
`

export const Button = styled(Defaults.Button)`
    background-color: #a60003;
    &:hover {
     background-color: #a60003;   
    }
`;

export const Input = styled(Defaults.Input)`
    border: 1px solid #f1f2f2;
    border-radius: 0;
    background: #fff;
    box-shadow: none;
    min-height: 40px;
    margin-top: 1rem;
    font-size: 1rem;
  `;
  
export const Label = styled.label`
    font-family: "Gotham","Arial",sans-serif;
    display: inline-block;
    text-align: left;
    color: #999;
    width: 100%;
    min-width: 200px;
    position: relative;
`
export const Card = styled(Defaults.Card)`
    &:hover {
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }`;
export const Container = Defaults.Container;