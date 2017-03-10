import styled from 'styled-components';
import * as Base from './base';



export const Product1Components = () => {
    return ({
        Link: styled(Base.Link)`
            color:#a60003;
            &:hover {
            color: #a60003;   
            }
        `,
        Button: styled(Base.Button)`
            background-color: #a60003;
            color: #ffffff;
            &:hover {
            background-color: #a60003;   
            }
        `,
        Input:styled(Base.Input)`
            border: 1px solid #f1f2f2;
            border-radius: 0;
            background: #fff;
            box-shadow: none;
            min-height: 40px;
            margin-top: 1rem;
            font-size: 1rem;
        `,
        Label: styled(Base.Label)`
            font-family: "Gotham","Arial",sans-serif;
            display: inline-block;
            text-align: left;
            color: #999;
            width: 100%;
            min-width: 200px;
            position: relative;
        `,
        Card: styled(Base.Card)`
            &:hover {
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
            }`,
        Header:styled(Base.Card.Header)`
            color: #ffffff;
            background-color: #a60003;
        `,
        Container:Base.Container 
        }
    )
}