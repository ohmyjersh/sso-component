import GenerateComponents from './generateComponents';

const Product1Components = () => {
    const styles = {
        link: `
            color:#a60003;
            &:hover {
            color: #a60003;   
            }
        `,
        button: `
            background-color: #a60003;
            color: #ffffff;
            &:hover {
            background-color: #a60003;   
            }
        `,
        input: `
            border: 1px solid #f1f2f2;
            border-radius: 0;
            background: #fff;
            box-shadow: none;
            min-height: 40px;
            margin-top: 1rem;
            font-size: 1rem;
        `,
        label: `
            font-family: "Gotham","Arial",sans-serif;
            display: inline-block;
            text-align: left;
            color: #999;
            width: 100%;
            min-width: 200px;
            position: relative;
        `,
        card:`
            &:hover {
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
            }`,
        cardHeader:`
            color: #ffffff;
            background-color: #a60003;
        `
  }
  return GenerateComponents(styles);
}

export default Product1Components;