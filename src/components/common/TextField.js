import React from 'react';

const TextField = (props) => {
    return(
    <div>
        {props.Label ? <props.Label>{props.label}</props.Label> : null}
        <props.Input value={props.value} placeholder={!props.Label ? props.label : null} onChange={(e) => props.update(e.target.value)} />
    </div>)
}

TextField.propTypes = {
    Label: React.PropTypes.func,
    Input: React.PropTypes.func.isRequired,
    label: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    update: React.PropTypes.func.isRequired
}

export default TextField;