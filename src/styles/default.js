import styled, {injectGlobal} from 'styled-components';

injectGlobal`
body {
  background-color: green;
}
`;

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};
  border: 2px solid palevioletred;
  border-radius: 3px;
  width: 100%
`;

export const Input = styled.input`
    position: relative;
    margin-bottom: 10px;
    display: inline-block;
    width: 100%;
    height: 28px;
    cursor: text;
    font-size: 12px;
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
    padding: 10px;
    overflow:hidden;
    background: #fff;
    border-radius: 4px;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    -webkit-transition: all .3s;
    transition: all .3s;
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
    font-size: 14px;
    color: black;
`;
