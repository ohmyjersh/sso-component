import GenerateComponents from './generateComponents';

const Product2Components = () => {
    const styles = {
        link: `
          color:#f7b334;
          &:hover {
          color: #f9c565;   
          }
      `,
        button: `
          background-color: #f7b334;
          color:#ffffff;
          &:hover {
            background-color:#f9c565;
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
          color:#ffffff;
          background-color: #f7b334;
        `
  }
  return GenerateComponents(styles);
}

export default Product2Components;
