import * as Default from './default';
import GenerateComponents from './generateComponents';
import {getComponentStylesAsync} from '../faker/fakeHandleRequest';

export const getComponents = (referrer) => {
    let components = getComponentStylesAsync(referrer);
    if(!Object.keys(components).length){
        return Default;
    }
    return GenerateComponents(components);
}
export default getComponents;