import React from 'react';

export default (props) => {
    const colorStyle = props.active ? props.color : 'black';
    return <div style={{color : colorStyle}}>{props.id}</div>
}