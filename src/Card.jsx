import React from 'react';
import './Card.css';


function Card(props) {
    return (
        <div className="suit" style={props.color}>
            <h1 className="suit-top">
                <span className="dis-block">{props.name}</span>
                <span>{props.icon}</span></h1>
            <div className="suit-body">
                <span>{props.icon}</span>
            </div>
            <h1 className="suit-bottom">
                <span>{props.icon}</span>
                <span className="rotate-180">{props.name}</span>
            </h1>
        </div>
    )
}

export default Card;