import React from 'react';
import GenerateComponents from '../styles/generateComponents';
import {getComponentStylesAsync} from '../faker/fakeHandleRequest';
import DefaultComponents from '../styles/default'; 
import Product1Components from '../styles/product1';
import Product2Components from '../styles/product2';

const getStyledComponents = (referrer) => {
    switch(referrer) {
        case 'product1':
            return Product1Components();
        case 'product2':
            return Product2Components();
        case 'default':
            return DefaultComponents();
        default:
            let components = getComponentStylesAsync(referrer);
            if(!Object.keys(components).length){
                return DefaultComponents();
            }
            return GenerateComponents(components);
            return components;
    }
}
const StyleWrapperHOC = (WrappedComponent) => {
  return props => (<WrappedComponent {...props} components={getStyledComponents(props.referrer)} />)
}

export default StyleWrapperHOC;
