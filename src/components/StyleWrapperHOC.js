import React from 'react';
import * as DefaultComponents from '../styles/default'; 
import * as Product1Components from '../styles/product1';
import * as Product2Components  from '../styles/product2';

const getComponents = (referrer) => {
    switch(referrer) {
        case 'product1':
            return Product1Components;
        case 'product2':
            return Product2Components
        default:
            return DefaultComponents;
    }
}

const StyleWrapperHOC = (WrappedComponent) => {
  return props => (<WrappedComponent {...props} components={getComponents(props.referrer)} />)
}
export default StyleWrapperHOC;