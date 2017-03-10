import * as Base from './base';
import styled from 'styled-components';

const generateComponents = (styles, useLabels = true) => {
    let label = useLabels ? styles.label ? styled(Base.Label)`${styles.label}` : Base.Label : null;
    let card = styles.card ? styled(Base.Card)`${styles.card}` : Base.Card;
    card.Header = styles.cardHeader ? styled(Base.Card.Header)`${styles.cardHeader}` : Base.Card.Header;
    card.Footer = styles.cardFooter ? styled(Base.Card.Footer)`${styles.cardFooter}` : Base.Card.Footer;
    card.Content =styles.cardContent  ? styled(Base.Card.Content)`${styles.cardContent}`: Base.Card.Content;
    return ({
        Link: styles.link ? styled(Base.Link)`${styles.link}`: Base.Link,
        Button: styles.button ? styled(Base.Button)`${styles.button}` : Base.Button,
        Input:styles.input ? styled(Base.Input)`${styles.input}` : Base.Input,
        Label: label,
        Card: card,
        Container: styles.container ? styled(Base.Container)`${styles.container}` : Base.Container,
        Error: styles.error ? styled(Base.Error)`${styles.error}` : Base.Error
        }
    )
}



export default generateComponents;