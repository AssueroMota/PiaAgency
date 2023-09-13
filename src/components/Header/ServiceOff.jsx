import React from 'react';
import ReactDOM from 'react-dom';

const ServiceOff = props => {
    const content = <div className={`service-off`} onClick={props.onClick}></div>;
    return ReactDOM.createPortal(content, document.getElementById('service-off'));
}

export default ServiceOff;