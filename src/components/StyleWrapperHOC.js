import React from 'react';
import getComponents from '../styles/getComponents';
import * as DefaultComponents from '../styles/default'; 
import * as Product1Components from '../styles/product1';
//import * as Product2Components  from '../styles/product2';

const getStyledComponents = (referrer) => {
    switch(referrer) {
        case 'product1':
            return Product1Components();
        // case 'product2':
        //     return Product2Components
        case 'default':
            return DefaultComponents();
        default:
            let components = getComponents(referrer);
            console.log(components);
            return components;
    }
}
const StyleWrapperHOC = (WrappedComponent) => {
  return props => (<WrappedComponent {...props} components={getStyledComponents(props.referrer)} />)
}

export default StyleWrapperHOC;
