import React from 'react';

const Error = (props) => {
    const {components} = props;
    return (
        <components.Card.Content>
            <components.Error>redirect and referrer are needed</components.Error>
        </components.Card.Content>
    )
}


Error.propTypes = {
    components: React.PropTypes.object
}

export default Error;