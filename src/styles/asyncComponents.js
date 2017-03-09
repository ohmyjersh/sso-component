import * as Base from './base';
import * as Default from './default';
import {getComponentStylesAsync} from './fakeHandleRequest';


export const getAsyncComponent = (style) => {
    const components = getComponentStylesAsync(style,);
    if(Object.keys(components).length){
        return Default;
    }
    const Button = styled(base.Button)`${components.button}`;
    const Label = styled(base.Label)`${components.label}`;
    const Card = styled(base.Card)`${components.card}`;
    Card.Content = styled(base.Card.Content)`${components.cardContent}`;
    Card.Header = styled(base.Card.Header)`${components.cardHeader}`;
    Card.Footer = styled(base.Card.Footer)`${components.cardFooter}`;
    const Container = styled(base.Container)`${components.container}`;
    const Input = styled(base.Input)`${components.input}`;
    const Error = styled(base.Error)`${components.error}`;
    const Link = styled(base.Link)`${components.link}`;
    return {
        Button,
        Label,
        Card,
        Container,
        Input,
        Link,
        Error
    }
}