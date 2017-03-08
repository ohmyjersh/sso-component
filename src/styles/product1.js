import styled from 'styled-components';
import * as Base from './base';

export const Link = styled(Base.Link)`
    color:#a60003;
    &:hover {
     color: #a60003;   
    }
`

export const Button = styled(Base.Button)`
    background-color: #a60003;
    &:hover {
     background-color: #a60003;   
    }
`;

export const Input = styled(Base.Input)`
    border: 1px solid #f1f2f2;
    border-radius: 0;
    background: #fff;
    box-shadow: none;
    min-height: 40px;
    margin-top: 1rem;
    font-size: 1rem;
  `;
  
export const Label = styled(Base.Label)`
    font-family: "Gotham","Arial",sans-serif;
    display: inline-block;
    text-align: left;
    color: #999;
    width: 100%;
    min-width: 200px;
    position: relative;
`
export const Card = styled(Base.Card)`
    &:hover {
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }`;
export const Container = Base.Container;