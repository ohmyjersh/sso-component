import styled, {injectGlobal} from 'styled-components';

import * as Defaults from './default';

export const Button = styled(Defaults.Button)`
    background-color: #a60003;
    &:hover {
     background-color: #a60003;   
    }
`;

export const Card = Defaults.Card;
export const Input = styled.input`
    width: 100%;
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

export const Container = styled(Defaults.Container)`
// ${injectGlobal`
//   body {
//     background-color: red;}
//   `}
`;