import * as Base from './base';
import styled from 'styled-components';

const generateComponents = (styles) => {
    return ({
        Link: styles.link ? styled(Base.Link)`${styles.link}`: Base.Link,
        Button: styles.button ? styled(Base.Button)`${styles.button}` : Base.Button,
        Input:styles.input ? styled(Base.Input)`${styles.input}` : Base.Input,
        Label: styles.label ? styled(Base.Label)`${styles.label}` : Base.Label,
        Card: styles.card ? styled(Base.Card)`${styles.card}` : Base.Card,
        CardHeader: styles.cardHeader ? styled(Base.Card.Header)`${styles.cardHeader}` : Base.Card.Header,
        CardFooter: styles.cardFooter ? styled(Base.Card.Footer)`${styles.cardFooter}` : Base.Card.Footer,
        CardContent: styles.cardContent  ? styled(Base.Card.Content)`${styles.cardContent}`: Base.Card.Content,
        Container: styles.container ? styled(Base.Container)`styles.container` : Base.Container,
        Error: styles.error ? styled(Base.Error)`styles.error` : Base.Error
        }
    )
}

export default generateComponents;